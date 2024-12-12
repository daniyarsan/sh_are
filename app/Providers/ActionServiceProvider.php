<?php

namespace App\Providers;

use App\Actions\ApplicationAction;
use App\Actions\AuthAction;
use App\Actions\Contracts\ApplicationActionContract;
use App\Actions\Contracts\AuthActionContract;
use App\Actions\Contracts\InvestmentActionContract;
use App\Actions\Contracts\ProjectActionContract;
use App\Actions\InvestmentAction;
use App\Actions\ProjectAction;
use Illuminate\Support\ServiceProvider;

class ActionServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->app->bind(InvestmentActionContract::class, InvestmentAction::class);
        $this->app->bind(ApplicationActionContract::class, ApplicationAction::class);
        $this->app->bind(ProjectActionContract::class, ProjectAction::class);
        $this->app->bind(AuthActionContract::class, AuthAction::class);
    }
}
