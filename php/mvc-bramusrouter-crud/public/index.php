<?php

define('ROOT_DIR', realpath(dirname(__DIR__)));
define('VIEWS_DIR', ROOT_DIR . '/src/views');

session_start();

require_once ROOT_DIR . '/vendor/autoload.php';
require_once ROOT_DIR . '/src/functions.php';

try {
	$PDO = (new App\PDOFactory())->create([
		'dbhost' => 'localhost',
		'dbname' => 'labs',
		'dbuser' => 'root',
		'dbpass' => 'root'
	]);
} catch (Exception $ex) {
	echo 'Không thể kết nối đến MySQL,
		kiểm tra lại username/password đến MySQL.<br>';
	echo '<pre>';
	var_dump($ex);
	exit();
}

use Bramus\Router\Router as Router;

$router = new Router();

require(ROOT_DIR . '/routes/books.php');
require(ROOT_DIR . '/routes/errors.php');

$router->run();
