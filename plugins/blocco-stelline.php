<?php

function stelline_block_register() {
    wp_register_script(
        'stelline-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor')
    );

    register_block_type('custom/stelline', array(
        'editor_script' => 'stelline-block',
    ));
}
add_action('init', 'stelline_block_register');
