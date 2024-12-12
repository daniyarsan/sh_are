<?php

namespace App\Http\Controllers;

use App\Actions\AuthAction;
use App\Http\Requests\Profile\ProfileUpdateRequest;
use App\Http\Requests\Profile\PasswordUpdateRequest;
use App\Http\Requests\Profile\TwofactorUpdateRequest;
use App\Http\Resources\CompanyResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('profile/Index', [
            'company' => CompanyResource::make(auth()->user()->company()->with(['investments.project.industry'])->first())
        ]);
    }

    public function updateProfile(ProfileUpdateRequest $request)
    {
        $validated = $request->validated();
        if(empty($validated)) {
            return back()->withSuccess('Нет данных для сохранения');
        }

        if($validated['login']) {
            $request->user()->fill($validated);
        }

        if(isset($validated['image'])) {
            $image = $validated['image'];
            $imageName = $image->hashName();
            $image->storeAs('public/images/companies', $imageName);
            $request->user()->company()->update(['image_path' => $imageName]);
        }

        $request->user()->save();

        return back()->withSuccess('Данные профиля обновлены успешно');
    }

    public function updatePassword(PasswordUpdateRequest $request)
    {
        $validated = $request->validated();

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back()->withSuccess( 'Пароль обновлен успешно');
    }


    public function updateTwofactor(TwofactorUpdateRequest $request, AuthAction $action)
    {
        $validated = $request->validated();

        try {
            $action->twoFactorUpdate($validated['otp'], $validated['secret']);
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        return back()->withSuccess( 'Двухфакторная аутентификация включена');
    }

}
