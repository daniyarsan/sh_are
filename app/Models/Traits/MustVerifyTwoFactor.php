<?php

namespace App\Models\Traits;

use Illuminate\Auth\Notifications\VerifyEmail;

trait MustVerifyTwoFactor
{

    public function hasVerifiedTwofactor()
    {
        return ! is_null($this->twofactor_verified_at);
    }

    public function markTwofactorAsVerified()
    {
        return $this->forceFill([
            'twofactor_verified_at' => $this->freshTimestamp(),
        ])->save();
    }

    public function clearTwoFactorVerification()
    {
        return $this->forceFill(['twofactor_verified_at' => null])->save();
    }

    public function mustVerifyTwofactor()
    {
        return (bool) $this->google2fa_secret;
    }

}
