<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use PragmaRX\Google2FALaravel\Facade as TwoFactor;

class Google2FA
{
    const GOOGLE_2FA_KEY = 'google2fa_secret';

    public function getSecret()
    {
        if (!session()->has(self::GOOGLE_2FA_KEY)) {
            session()->put(self::GOOGLE_2FA_KEY, TwoFactor::generateSecretKey());
        }

        return Auth::user()->google2fa_secret ? Auth::user()->google2fa_secret : session()->get(self::GOOGLE_2FA_KEY);
    }

    public function getQR()
    {
        return TwoFactor::getQRCodeInline(
            config('app.name'), // A name for the code in 2FA apps
            auth()->user()->login, // The user's email
            $this->getSecret(),
        );
    }

    public function resetSession()
    {
        session()->put(self::GOOGLE_2FA_KEY, TwoFactor::generateSecretKey());
    }
}
