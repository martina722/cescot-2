// Ottieni gli elementi del pop-up e i bottoni
const whatsappPopup = document.getElementById('whatsapp-popup');
const whatsappBtn = document.getElementById('whatsapp-btn');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatBox = document.querySelector('.chat-box');

// Apre il pop-up quando si clicca sul bottone
whatsappBtn.addEventListener('click', () => {
    whatsappPopup.style.display = 'flex';
});

// Chiude il pop-up quando si clicca sulla X
closeBtn.addEventListener('click', () => {
    whatsappPopup.style.display = 'none';
});

// Simula l'invio di un messaggio
sendBtn.addEventListener('click', () => {
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        // Aggiungi il messaggio dell'utente
        const outgoingMessage = document.createElement('div');
        outgoingMessage.classList.add('message', 'outgoing');
        outgoingMessage.innerHTML = `<strong>Tu:</strong> ${userMessage}`;
        chatBox.appendChild(outgoingMessage);

        // Scrolla la chat verso il basso
        chatBox.scrollTop = chatBox.scrollHeight;

        // Pulisci l'input
        messageInput.value = '';

        // Simula una risposta di WhatsApp dopo un breve delay
        setTimeout(() => {
            const incomingMessage = document.createElement('div');
            incomingMessage.classList.add('message', 'incoming');
            incomingMessage.innerHTML = `<strong>WhatsApp:</strong> Grazie per il messaggio! Ti risponderemo presto.`;
            chatBox.appendChild(incomingMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1500); // Risposta dopo 1,5 secondi
    }
});
