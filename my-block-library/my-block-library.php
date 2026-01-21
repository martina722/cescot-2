<?php
    /**
     * Plugin Name: I Miei Blocchi
     * Plugin URI: https://...
     * Description: Una libreria di blocchi di Gutenberg
     * Version: 0.0.01
     * Requires at least: 6.5
     * Requires PHP: 7.4
     * Author: Andrea Gaspari
     * Author URI: https://...
     * License: GPL2
     * Text Domain: myblocklibrary
     */

    /**
     * Plugin Setup: Set language domain and load translations from plugin_folder/languages.
     * 
     * @since 1.0.0
     * 
     * @return void
     */
    function cer_plugin_setup() {

        /*** Set and load language domain ***/
            if (!defined('MY_LANG_DOMAIN')) {
                define('MY_LANG_DOMAIN', 'myblocklibrary');
            }

            load_plugin_textdomain(MY_LANG_DOMAIN, false, dirname( plugin_basename( __FILE__ ) ) . '/languages');
        /*** END - Set and load language domain ***/
    }
    add_action('init', 'cer_plugin_setup');

    function cer_custom_block_styles() {

        wp_enqueue_block_style('core/group', array(
            'handle' => 'custom-grid',
            'src' => plugin_dir_url(__FILE__) . 'assets/css/styles/core-group-grid.css',
            'deps'  => array(),
            'ver'   => null,
            'media' => 'all'
        ));

        register_block_style('core/group', array(
            'name' => 'custom-grid',
            'label' => 'Griglia 2 / 1 / 1'
        ));


    }
    add_action('init', 'cer_custom_block_styles');

    function cer_custom_block_category($categories) {
        // prepare the arguments with default values
        $categories = array(
            'slug' => 'cescot-blocks',
            'title' => 'Cescot'
        );

        array_splice(
            $categories,
            3, //posizione
            0,
            array($categories)
        );

        return $categories;
    }
    add_filter('block_categories_all', 'cer_custom_block_category', 10, 1);

    include_once('blocks/cer-social-phone/index.php');
    include_once('blocks/cer-first-sample/index.php');
    include_once('blocks/cer-button');
    