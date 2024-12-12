<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Company;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RegistrationController extends Controller
{
    /**
     * Display the registration view.
     */
    public function index(): Response
    {
        return Inertia::render('auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $user = User::create([
            'login' => $request->login,
            'password' => Hash::make($request->password),
        ]);

        $user->forceFill([
            'restore_token' => Str::random(30),
        ])->save();

        $user->company()->create([
            'name' => $request->login,
            'type' => Company::TYPE_INDIVIDUAL,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('twofactor.index', absolute: false));
    }
}
