<?php

namespace Core\Admin\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if ($guard == "admin" && Auth::guard($guard)->check()) {
                return redirect(route("admin.dashboard.index"));
            }
            if ($guard == "web" && Auth::guard($guard)->check()) {
                return redirect(route('home'));
            }
            // if (Auth::guard($guard)->check()) {
            //     return redirect(route('home'));
            // }
        }

        return $next($request);
    }
}
