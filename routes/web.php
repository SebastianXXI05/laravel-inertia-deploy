<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::inertia('/', 'Home');
Route::inertia('/about', 'About');
Route::get('/users', [UserController::class, 'index']);