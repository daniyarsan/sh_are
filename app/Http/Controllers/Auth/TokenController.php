<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class TokenController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('token/Index', [
            'restore_token' => Auth::user()->restore_token
        ]);
    }


    public function store(Request $request)
    {
//        $request->validate([
//            'otp' => 'required|numeric',
//            'secret' => 'required|string'
//        ]);
//
//        if (!TwoFactor::verifyKey($request->input('secret'), $request->input('otp'))) {
//            return redirect()->back()->withErrors([
//                'Не корректный ОТП код. Попробуйте еще раз',
//            ]);
//        }
//
//        $request->user()->update([
//            'twofactor' => $request->input('key'), // This contains the secret key we generated earlier
//        ]);
//
//        return back()->withSuccess('Пароль обновлен успешно');
////        return back()->with('success', 'Пароль обновлен успешно');
    }

}
