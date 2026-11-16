<?php

namespace Core\Auth\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AuthController extends Controller
{


    public function loginForm()
    {
        return Inertia::render("Auth/login");
    }


    public function login(Request $request)
    {
        $request->validate(
            [
                'username' => ['required'],
                'password' => ['required', 'string'],
            ]
        );
        $this->checkRateLimit($request);
        $loginField = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        if (Auth::guard("admin")->attempt([$loginField => $request->username, 'password' => $request->password], $request->filled('remember'))) {
            RateLimiter::clear($this->throttleKey($request));
            $request->session()->regenerate();
            return redirect()->intended(route("admin.dashboard.index"))->with('status', 'welcome back!');
        }
        RateLimiter::hit($this->throttleKey($request), 60);
        return back()->withErrors([
            'username' => 'Invalid credentials or account not found.',
        ]);
        // return redirect($redirect);
    }


    protected function checkRateLimit(Request $request)
    {
        if (RateLimiter::tooManyAttempts($this->throttleKey($request), 5)) {
            $seconds = RateLimiter::availableIn($this->throttleKey($request));
            return back()->withErrors([
                'login' => "Too many login attempts. Try again in {$seconds} seconds.",
            ]);
        }
    }

    protected function throttleKey(Request $request)
    {
        return Str::lower($request->input('login')) . '|' . $request->ip();
    }


    public function logout(Request $request)
    {
        Auth::guard("admin")->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('auth.login')->with('status', 'logout Successfully');
    }
}
