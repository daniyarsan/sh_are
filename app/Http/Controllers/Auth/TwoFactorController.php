<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Facades\Google2FAFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use PragmaRX\Google2FA\Google2FA;
use PragmaRX\Google2FALaravel\Facade as TwoFactor;

class TwoFactorController extends Controller
{

    public function index()
    {
        if (Auth::user()->google2fa_secret) {
            return redirect()->route('profile.index');
        }

        return Inertia::render('twoFactor/Index');
    }

    public function store(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric',
            'secret' => 'required|string'
        ]);

        if (!TwoFactor::verifyKey($request->input('secret'), $request->input('otp'))) {
            return redirect()->back()->withErrors([
                'Не корректный ОТП код. Попробуйте еще раз',
            ]);
        }

        Auth::user()->google2fa_secret = $request->input('secret');
        Auth::user()->save();
        Auth::user()->markTwofactorAsVerified();

        return redirect()->route('reset_token.index')->withSuccess('2FA создан успешно');
    }

    public function destroy(Request $request)
    {
        Auth::user()->google2fa_secret = null;
        Auth::user()->save();

        Google2FAFacade::resetSession();

        return back()->withSuccess('2FA выключен');
    }

}
