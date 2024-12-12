<?php

use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\DonatorController;
use App\Http\Controllers\Api\InvestmentController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\VoteController;
use Illuminate\Support\Facades\Route;

Route::post('/vote', [VoteController::class, 'vote']);
Route::post('/unvote', [VoteController::class, 'unvote']);

Route::get('/companies', [CompanyController::class, 'index']);
Route::get('/companies/options', [CompanyController::class, 'options']);

Route::get('/projects/options', [ProjectController::class, 'options']);


Route::get('/applications', [ApplicationController::class, 'index']);
Route::get('/applications-all', [ApplicationController::class, 'all']);
Route::get('/applications/invested', [ApplicationController::class, 'invested']);

Route::get('/donators', [DonatorController::class, 'index']);



Route::controller(InvestmentController::class)->prefix('investments')->as('investments.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::middleware('web')->group(function () {
        Route::get('/profile', 'profile')->name('profile');
    });
});


