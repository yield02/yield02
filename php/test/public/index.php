<?php

require __DIR__ . '/../vendor/autoload.php';

$router = new \Bramus\Router\Router();

$router->get('/', function() {
    echo 'Home Page';
});

$router->get('/about', function() {
    echo 'About Page Contents';
});

$router->run();