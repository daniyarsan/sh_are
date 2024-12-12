<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Services\Facades\Google2FAFacade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        if (app()->hasDebugModeEnabled() && isset($_ENV['APP_DEBUG_WORKER'])) {
            Inertia::share([ 'origin' => $_ENV['APP_DEBUG_WORKER']]);
        }

        Inertia::share([ 'errors' => function () {
            return Session::get('errors') ? Session::get('errors')->getBag('default')->getMessages() : (object) [];
        }]);
        Inertia::share([ 'success' => function () { return Session::get('success') ? Session::get('success'): ''; }]);


        return [
            ...parent::share($request),
            'menu' => $this->getMenu(),
            'auth' =>  $request->user() ? $this->getAuth($request->user()) : false,
            'ziggy' => fn () => [
//                ...(new Ziggy())->toArray(),
                'location' => $request->url(),
                'query' => $request->query(),
            ],
            'csrf_token' => csrf_token(),
        ];
    }


    /* Get auth user globally */
    public function getAuth(User $user)
    {
        return [
            'user' => User::query()->with('company.investments.project.industry')->find($user?->id)->makeVisible(['google2fa_secret']),
            'qr' => Google2FAFacade::getQR(),
            'secret' => Google2FAFacade::getSecret(),
        ];
    }

    public function getMenu()
    {
        return [
            ["text" => "How it works?", "href" => route('page.about')],
            ["text" => "Projects", "href" => route('project.index')],
            ["text" => "Stats", "href" => route('company.index')],
            ["text" => "Share", "href" => route('investment.index')],
            ["text" => "Help me", "href" => route('application.index')]
        ];
    }
}
