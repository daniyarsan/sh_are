<?php

namespace App\Providers;

use App\Services\Generator;
use App\Services\Google2FA;
use Illuminate\Support\ServiceProvider;

class Google2FAServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {

    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->app->bind('google2fa', function(){
            return new Google2FA();
        });
    }


}
