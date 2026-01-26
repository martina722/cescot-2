<?php

defined('ABSPATH') || exit;

/*funzione di registrazione anonima */
add_action('init', function() {
    register_block_type(__DIR__);
    });

/* funzione di registrazione esplicita
function register_my_block() {
    register_block_type(__DIR__);
}
add_action('init', 'register_my_block');
*/