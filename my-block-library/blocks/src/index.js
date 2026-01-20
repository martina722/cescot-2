import { registerBlockVariation } from '@wordpress/blocks';

registerBlockVariation( 'core/social-link' , {
    name: 'phone',
    title: __('Telefono', 'immaginificio'),
    description: 'Aggiungi un link telefonico',
    attributes: {
        service: 'phone',
        label: 'Chiama',
    },
    scope: ['block', 'inserter'],
    isActive: ['service']
});