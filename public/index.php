<?php

use Illuminate\Http\Request;



//header("Access-Control-Allow-Origin: *");
////header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
//header("Access-Control-Allow-Headers:*");
//
//if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {//send back preflight request response
//    return "";
//}

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
(require_once __DIR__.'/../bootstrap/app.php')
    ->handleRequest(Request::capture());
