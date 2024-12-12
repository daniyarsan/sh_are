<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class Google2FAFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'google2fa';
    }

}
