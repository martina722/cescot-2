import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, addDoc, deleteDoc, onSnapshot, collection, query, updateDoc, setLogLevel } from 'firebase/firestore';
import { Calendar, CheckSquare, Trash2, Zap, Clock, Grip, Loader2, List, X } from 'lucide-react';

// === CONFIGURAZIONE E INIZIALIZZAZIONE FIREBASE ===
// Le variabili globali sono fornite dall'ambiente Canvas.
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Riferimenti ai servizi Firebase
let db, auth;
if (firebaseConfig) {
  setLogLevel('Debug');
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

// Funzione per ottenere il riferimento alla collezione privata dell'utente
function getUserTasksCollectionRef(currentUserId) {
  if (!db || !currentUserId) return null;
  // Path privato: /artifacts/{appId}/users/{userId}/tasks
  const collectionPath = `/artifacts/${appId}/users/${currentUserId}/tasks`;
  return collection(db, collectionPath);
}

// Mappa delle priorità per lo stile
const priorityMap = {
  Bassa: { color: 'bg-green-500', label: 'Bassa' },
  Media: { color: 'bg-yellow-500', label: 'Media' },
  Alta: { color: 'bg-red-500', label: 'Alta' },
};

// Componente Modale personalizzato (sostituisce alert/confirm)
const Modal = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full transform transition-transform duration-300 scale-100">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-150 font-medium"
          >
            Capito
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente della Singola Attività
const TaskCard = ({ task, userId }) => {
  const { id, name, priority, dueDate, isCompleted } = task;

  // Formatta la data di scadenza
  const formattedDate = dueDate
    ? new Date(dueDate).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })
    : 'Nessuna Scadenza';

  // Toggle dello stato di completamento
  const toggleComplete = async () => {
    try {
      if (!userId) return;
      const taskDocRef = doc(getUserTasksCollectionRef(userId), id);
      await updateDoc(taskDocRef, { isCompleted: !isCompleted });
    } catch (e) {
      console.error("Errore nel toggle dell'attività:", e);
      // In un'app reale, si userebbe un toast/modale per l'errore
    }
  };

  // Eliminazione dell'attività
  const deleteTask = async () => {
    try {
      if (!userId) return;
      const taskDocRef = doc(getUserTasksCollectionRef(userId), id);
      await deleteDoc(taskDocRef);
    } catch (e) {
      console.error("Errore nell'eliminazione dell'attività:", e);
    }
  };

  const priorityStyle = priorityMap[priority]?.color || 'bg-gray-400';

  return (
    <li className={`flex items-center justify-between p-4 bg-white rounded-xl shadow-md transition duration-200 hover:shadow-lg border-l-4 ${isCompleted ? 'border-green-500 opacity-70' : 'border-indigo-500'}`}>
      
      {/* Contenuto e Checkbox */}
      <div className="flex items-start flex-1 min-w-0 pr-4">
        {/* Checkbox personalizzata */}
        <button
          onClick={toggleComplete}
          className={`flex-shrink-0 mt-1 mr-3 h-6 w-6 rounded-full border-2 ${isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-indigo-500'}`}
          aria-label={isCompleted ? 'Segna come non completata' : 'Segna come completata'}
        >
          {isCompleted && (
            <CheckSquare className="h-full w-full text-white p-0.5" />
          )}
        </button>

        {/* Dettagli Task */}
        <div className="flex-1 min-w-0">
          <p className={`text-lg font-semibold ${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {name}
          </p>
          
          {/* Metadata: Priorità e Scadenza */}
          <div className="flex items-center space-x-3 text-sm mt-1 text-gray-500">
            <span className="flex items-center">
              <Zap className="h-4 w-4 mr-1" />
              <span className={`px-2 py-0.5 text-xs font-semibold text-white rounded-full ${priorityStyle}`}>
                {priorityMap[priority]?.label || 'Non Def.'}
              </span>
            </span>

            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </span>
          </div>
        </div>
      </div>

      {/* Pulsante Elimina */}
      <button
        onClick={deleteTask}
        className="flex-shrink-0 p-2 text-red-500 hover:text-white hover:bg-red-600 rounded-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
        title="Elimina"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </li>
  );
};


// Componente Principale dell'App
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTab, setCurrentTab] = useState('pending'); // 'pending' o 'completed'
  const [modalState, setModalState] = useState({ isOpen: false, title: '', message: '' });
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newItem, setNewItem] = useState({ name: '', priority: 'Media', dueDate: '' });

  // Funzione per mostrare il modale
  const showModal = (title, message) => {
    setModalState({ isOpen: true, title, message });
  };

  // === Autenticazione e Inizializzazione Firebase ===
  useEffect(() => {
    if (!firebaseConfig) {
      showModal('Errore di Configurazione', 'Configurazione Firebase non trovata.');
      return;
    }

    // Listener per lo stato di autenticazione
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        // Tenta l'autenticazione
        try {
          if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
          } else {
            await signInAnonymously(auth);
          }
        } catch (error) {
          showModal('Errore di Autenticazione', `Impossibile autenticare l'utente: ${error.message}`);
          setIsLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, []); // Esegue solo al montaggio

  // === Listener in Tempo Reale su Firestore ===
  useEffect(() => {
    if (!userId) {
      // Non iniziare il listener finché non abbiamo l'ID utente
      if (!isLoading) setIsLoading(true);
      return;
    }
    
    setIsLoading(true);
    const colRef = getUserTasksCollectionRef(userId);
    const q = query(colRef);

    // onSnapshot per ascoltare i cambiamenti in tempo reale
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedTasks = [];
      snapshot.forEach(doc => {
        fetchedTasks.push({ id: doc.id, ...doc.data() });
      });
      
      // Ordina le attività: prima non completate (per priorità e scadenza), poi completate
      fetchedTasks.sort((a, b) => {
        // 1. Priorità di completamento (non completate prima)
        if (a.isCompleted !== b.isCompleted) {
          return a.isCompleted ? 1 : -1;
        }

        // 2. Priorità di importanza (Alta > Media > Bassa) - Solo per quelle non completate
        if (!a.isCompleted) {
          const pOrder = { Alta: 3, Media: 2, Bassa: 1 };
          return pOrder[b.priority] - pOrder[a.priority];
        }

        // 3. Data di creazione come fallback
        return a.createdAt - b.createdAt;
      });

      setTasks(fetchedTasks);
      setIsLoading(false);
    }, (error) => {
      console.error("Errore nel listener in tempo reale: ", error);
      showModal('Errore di Sincronizzazione', 'Impossibile caricare le attività dal database.');
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [userId]); // Riesegue quando userId cambia

  // === Aggiunta Nuova Attività ===
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!userId) {
      showModal('Attenzione', 'Attendere il completamento dell\'autenticazione.');
      return;
    }
    
    if (newItem.name.trim() === "") {
      showModal('Attenzione', 'Il nome dell\'attività non può essere vuoto.');
      return;
    }

    try {
      const taskData = {
        name: newItem.name.trim(),
        priority: newItem.priority,
        dueDate: newItem.dueDate ? new Date(newItem.dueDate).getTime() : null,
        isCompleted: false,
        createdAt: Date.now(),
        createdBy: userId,
      };

      await addDoc(getUserTasksCollectionRef(userId), taskData);
      setNewItem({ name: '', priority: 'Media', dueDate: '' }); // Reset input
    } catch (e) {
      console.error("Errore nell'aggiungere l'attività: ", e);
      showModal('Errore Database', 'Non è stato possibile salvare l\'attività.');
    }
  };

  // === Filtraggio delle Attività (Memoized per l'efficienza) ===
  const filteredTasks = useMemo(() => {
    if (currentTab === 'pending') {
      return tasks.filter(task => !task.isCompleted);
    } else if (currentTab === 'completed') {
      return tasks.filter(task => task.isCompleted);
    }
    return tasks; // Tutte
  }, [tasks, currentTab]);

  // === UI Componenti di Input ===
  const TaskForm = () => (
    <form onSubmit={handleAddTask} className="space-y-3 p-4 bg-indigo-50 rounded-xl shadow-inner border border-indigo-200">
      <h3 className="text-xl font-bold text-indigo-700">Nuova Attività</h3>
      
      {/* Input Nome Attività */}
      <input
        type="text"
        placeholder="Nome dell'attività (es. Finire la relazione)"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        required
      />

      {/* Controlli Scadenza e Priorità */}
      <div className="flex space-x-3">
        {/* Priorità */}
        <select
          value={newItem.priority}
          onChange={(e) => setNewItem({ ...newItem, priority: e.target.value })}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Alta">⚡ Alta</option>
          <option value="Media">⏱️ Media</option>
          <option value="Bassa">✅ Bassa</option>
        </select>
        
        {/* Scadenza */}
        <input
          type="date"
          value={newItem.dueDate}
          onChange={(e) => setNewItem({ ...newItem, dueDate: e.target.value })}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          title="Data di Scadenza"
        />
      </div>

      {/* Pulsante Aggiungi */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 flex items-center justify-center"
        disabled={isLoading}
      >
        <List className="h-5 w-5 mr-2" />
        Aggiungi Task
      </button>
    </form>
  );

  // === Componente Principale (Render) ===
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-lg space-y-6">
        
        {/* Header App */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">MyTask Planner</h1>
          <p className="text-gray-500 mt-1">Organizza e traccia le tue attività</p>
          <small className="text-xs text-gray-400 mt-2 block break-all">
            ID Utente: {userId || <span className="italic">Autenticazione...</span>}
          </small>
        </header>

        {/* Form di Aggiunta Task */}
        <TaskForm />

        {/* Navigazione/Filtri */}
        <div className="flex bg-white rounded-xl shadow-lg p-1">
          <button
            onClick={() => setCurrentTab('pending')}
            className={`flex-1 py-3 font-semibold rounded-lg transition duration-200 flex items-center justify-center space-x-2 ${currentTab === 'pending' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <Clock className="h-5 w-5" />
            <span>In Corso ({tasks.filter(t => !t.isCompleted).length})</span>
          </button>
          <button
            onClick={() => setCurrentTab('completed')}
            className={`flex-1 py-3 font-semibold rounded-lg transition duration-200 flex items-center justify-center space-x-2 ${currentTab === 'completed' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <CheckSquare className="h-5 w-5" />
            <span>Completate ({tasks.filter(t => t.isCompleted).length})</span>
          </button>
        </div>

        {/* Lista Attività */}
        <div className="min-h-[200px] space-y-4">
          {isLoading && (
            <div className="text-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-indigo-500 mx-auto" />
              <p className="text-gray-500 mt-2">Caricamento attività...</p>
            </div>
          )}

          {!isLoading && filteredTasks.length === 0 && (
            <div className="text-center p-8 bg-white rounded-xl shadow-md border border-gray-200">
              <Grip className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">
                {currentTab === 'pending' ? 'Non hai attività da completare!' : 'Nessuna attività completata.'}
              </p>
              <p className="text-sm text-gray-400 mt-1">Aggiungi un nuovo task qui sopra.</p>
            </div>
          )}

          {!isLoading && filteredTasks.length > 0 && (
            <ul className="space-y-3">
              {filteredTasks.map(task => (
                <TaskCard key={task.id} task={task} userId={userId} />
              ))}
            </ul>
          )}
        </div>
      </div>
      
      {/* Modale */}
      <Modal
        isOpen={modalState.isOpen}
        title={modalState.title}
        message={modalState.message}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
      />
    </div>
  );
};

export default App;