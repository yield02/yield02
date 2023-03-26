<?php

$router->get('/', 'App\Controllers\BookController@index');
$router->get('/books/add', 'App\Controllers\BookController@showAddPage');
$router->post('/books', 'App\Controllers\BookController@create');
$router->get('/books/edit/(\d+)', 'App\Controllers\BookController@showEditPage');
$router->post('/books/(\d+)', 'App\Controllers\BookController@update');
$router->get('/books/delete/(\d+)', 'App\Controllers\BookController@delete');
