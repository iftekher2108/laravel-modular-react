<?php

use App\Http\Middleware\HandleInertiaRequests;
use Core\Admin\Http\Middleware\Authenticate;
use Core\Admin\Http\Middleware\Permission;
use Core\Admin\Http\Middleware\RedirectIfAuthenticated;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        $middleware->alias([
            "auth" => Authenticate::class,
            "guest" => RedirectIfAuthenticated::class,
            // 'permission' => Permission::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
