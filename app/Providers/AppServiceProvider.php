<?php

namespace App\Providers;

use App\ViewComposers\SidebarMenuComposer;
use Illuminate\Foundation\Vite;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::$wrap = null;

        if (!$this->app->isLocal()) {
            URL::forceScheme('https');
        }

        Vite::macro('image', fn (string $asset) => $this->asset("resources/images/{$asset}"));
        Vite::macro('admin', fn (string $asset) => $this->asset("resources/admin/{$asset}"));

        View::composer('admin._parts.sidebar', SidebarMenuComposer::class);
    }
}
