import { registerBlockType } from '@wordpress/blocks';

import { 
    InspectorControls,
    PanelColorSettings,
    useBlockProps 
} from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element';

import block from '../block.json';

registerBlockType( block.name, {
    title: block.title,
    description: block.description,
    icon: block.icon,
    attributes: {
        blockId: {
            type: 'string',
            'default': ''
        }
    },
    edit: ( props ) => {
        const {
            clientId,
            setAttributes
		} = props;

        useEffect(() => {
            setAttributes({ blockId: clientId });
        }, [clientId]);
                
        const blockProps = useBlockProps({
            className: 'cer-first-sample-block'
        });

        return <span { ...blockProps }>('Your block content goes here')</span>;

        return <>
        <InspectorControls key="settings">
            <PanelBody title="Impostazioni Bottone" 
            <TextControl
                label="URL di destinazione"
                value={props.attributes.targetUrl}
                onChange={(valoreAttuale) => {
                    props.attributes.targetUrl = valoreAttuale;
                } }
            />
        </InspectorControls>
        <InspectorControls key="styles">
        </InspectorControls>
    </>
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        
        return <span { ...blockProps }>('Your block content goes here')</span>;
    }
    
} );