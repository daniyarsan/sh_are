<?php

namespace App\Actions;

use App\Actions\Contracts\ApplicationActionContract;
use App\Actions\DTO\ApplicationDTO;
use App\Actions\DTO\TwoFactorUpdateDTO;
use App\Models\Application;
use App\Models\Image;
use App\Models\Video;
use App\Services\VideoImageGenerator;
use Illuminate\Support\Facades\Auth;
use PragmaRX\Google2FALaravel\Facade as TwoFactor;

class AuthAction extends ApplicationActionContract
{


    public function twoFactorUpdate(string $otp, string $secret)
    {
        if (!TwoFactor::verifyKey($secret, $otp)) {
            throw new \Exception('Не корректный ОТП код. Попробуйте еще раз');
        }

        Auth::user()->google2fa_secret = $secret;
        Auth::user()->save();
        Auth::user()->markTwofactorAsVerified();
    }


}
