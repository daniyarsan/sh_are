<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use PragmaRX\Google2FALaravel\Facade as TwoFactor;

class LoginController extends Controller
{

    public function create(): Response
    {
        return Inertia::render('auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('profile.index', absolute: false));
    }

    public function otpCheck(Request $request)
    {
        return Inertia::render('auth/OtpCheck');
    }

    public function otpStore(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric',
        ]);

        if (!TwoFactor::verifyKey(Auth::user()->google2fa_secret, $request->input('otp'))) {
            return redirect()->back()->withErrors([
                'Не корректный ОТП код. Попробуйте еще раз',
            ]);
        }

        Auth::user()->markTwofactorAsVerified();

        return redirect()->intended(route('profile.index', absolute: false));
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::user()->clearTwoFactorVerification();
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('page.home');
    }
}
