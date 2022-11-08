<?php

use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});


Route::get('/sorry', function () {
    return Inertia::render('Sorry');
});

Route::get('/goodluck', function () {
    return Inertia::render('GoodLuck');
});

Route::get('/form', function () {
    return Inertia::render('Form');
});

Route::get('/terms', function () {
    return Inertia::render('Terms');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})
->middleware(['auth', 'verified'])
->name('dashboard');

Route::resource('admin', SubscriberController::class)
    ->only(['index'])
    ->middleware(['auth', 'verified']);

Route::resource('subscribers', SubscriberController::class)
    ->only(['store','edit', 'destroy']);




require __DIR__.'/auth.php';
