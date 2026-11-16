<?php

use Core\Auth\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

Route::get('/admin', function () {
    return redirect()->route('auth.login');
});

Route::prefix('auth')->group(function () {
    Route::get('/clear', function () {
        Artisan::call('optimize:clear');
        return back()->with('success', 'Application Cache Clear Successfully');
    })->name('clear');
    Route::get('/optimize', function () {
        Artisan::call('config:cache');
        Artisan::call('route:cache');
        Artisan::call('view:cache');
        Artisan::call('optimize');
        return back()->with('success', 'Application Optimize Successfully');
    })->name('optimize');
    Route::controller(AuthController::class)->group(function () {
        Route::get("/login", "loginForm")->name("auth.login")->middleware("guest:admin");
        Route::post('/login', "login")->name('auth.login.submit')->middleware('guest:admin');
        Route::post('/logout', 'logout')->name('auth.logout')->middleware('auth:admin');
    });
});

