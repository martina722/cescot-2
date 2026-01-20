<?php

    function add_cer_social_link_phone_service($services) {
        $services['phone'] = array (
            'name' => 'Telefono',
            'icon' => '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
        );
        return $services;

    }
    add_filter('block_core_social_link_get_services', 'add_cer_social_link_phone_services');
