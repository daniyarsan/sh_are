<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegistrationController;
use App\Http\Controllers\Auth\TokenController;
use App\Http\Controllers\Auth\TwoFactorController;
use Illuminate\Support\Facades\Route;


Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    Route::get('register', [RegistrationController::class, 'index'])->name('register');
    Route::post('register', [RegistrationController::class, 'store']);
//    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
//        ->name('password.request');
//    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
//        ->name('password.email');

//    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
//        ->name('password.reset');
//    Route::post('reset-password', [NewPasswordController::class, 'store'])
//        ->name('password.store');

});



/**** AUTH SPACE *****/

Route::middleware('auth')->group(function () {
    Route::get('otp', [LoginController::class, 'otpCheck'])->name('otp.check');
    Route::post('otp', [LoginController::class, 'otpStore'])->name('otp.store');

    Route::post('logout', [LoginController::class, 'destroy'])
        ->name('logout');
});


/**** AUTH + 2FA SPACE *****/

Route::middleware(['auth', \App\Http\Middleware\VerifyTwoFactorAccess::class])->group(function () {
    Route::get('reset-token', [TokenController::class, 'index'])->name('reset_token.index');
    Route::post('reset-token', [TokenController::class, 'store'])->name('reset_token.store');

    Route::get('2fa', [TwoFactorController::class, 'index'])->name('twofactor.index');
    Route::post('2fa', [TwoFactorController::class, 'store'])->name('twofactor.store');
    Route::post('2fa/disable', [TwoFactorController::class, 'destroy'])->name('twofactor.destroy');

//    Route::get('verify-email', EmailVerificationPromptController::class)
//        ->name('verification.notice');
//    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
//        ->middleware(['signed', 'throttle:6,1'])
//        ->name('verification.verify');
//    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//        ->middleware('throttle:6,1')
//        ->name('verification.send');
//    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
//        ->name('password.confirm');
//    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
//    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

});



