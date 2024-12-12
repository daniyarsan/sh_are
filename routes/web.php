<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\CaseController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DonatorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\CompanyController as AdminCompanyController;
use App\Http\Controllers\Admin\InvestmentController as AdminInvestmentController;
use App\Http\Controllers\Admin\PaymentController as AdminPaymentController;
use App\Http\Controllers\Admin\ApplicationController as AdminApplicationController;
use App\Http\Controllers\InvestmentController;
use App\Http\Controllers\ThumbnailController;
use App\Http\Middleware\VerifyTwoFactorAccess;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController as AdminLoginController;

Route::get('/storage/{dir}/{method}/{size}/{file}', [ThumbnailController::class, 'videoThumb'])
    ->where('method', 'crop|resize|scale')
    ->where('size', '\d+x\d+')
    ->where('file', '.+\.(png|jpg|gif|bmp|jpeg)$')
    ->name('thumbnail');


Route::controller(HomeController::class)->as('page.')->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/about', 'about')->name('about');
    Route::get('/rating', 'rating')->name('rating');
});

Route::controller(ApplicationController::class)->as('application.')->group(function () {
    Route::get('/apply', 'index')->name('index');
    Route::post('/apply', 'store')->name('store');
});

Route::controller(CaseController::class)->as('case.')->group(function () {
    Route::get('/cases', 'index')->name('index');
    Route::get('/case/{id}', 'one')->name('one');
});

Route::controller(DonatorController::class)->as('donator.')->group(function () {
    Route::get('/donators', 'index')->name('index');
    Route::get('/donator/{id}', 'one')->name('one');
});

Route::controller(ProjectController::class)->as('project.')->group(function () {
    Route::get('/projects/', 'index')->name('index');
    Route::get('/project/{slug}', 'one')->name('one');
});

Route::get('/companies', [CompanyController::class, 'index'])->name('company.index');
Route::get('/company/{slug}', [CompanyController::class, 'one'])->name('company.one');


/**** AUTH + 2FA SPACE *****/
Route::middleware(['auth', VerifyTwoFactorAccess::class])->group(function () {
    Route::controller(InvestmentController::class)->prefix('investment')->as('investment.')->group(function () {
        Route::post('/', 'store')->name('store');
        Route::get('payments', 'payments')->name('payments.index');
        Route::post('payments/{id}', 'delete')->name('payments.delete');
    });

    Route::controller(ProfileController::class)->prefix('profile')->as('profile.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('update/profile', 'updateProfile')->name('update.profile');
        Route::post('update/2fa', 'updateTwofactor')->name('update.twofactor');
        Route::post('update/password', 'updatePassword')->name('update.password');
    });
});


Route::controller(InvestmentController::class)->as('investment.')->group(function () {
    Route::get('/investment/{slug?}', 'index')->name('index');
});

/* Admin space */

Route::prefix('admin')->as('admin.')->group(function () {
    Route::get('login', [AdminLoginController::class, 'login'])->name('auth.login');
    Route::post('login', [AdminLoginController::class, 'store'])->name('auth.store');


    Route::middleware(\App\Http\Middleware\IsAdminMiddleware::class)->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('index');

        /* ADMIN PROJECT */
        Route::controller(AdminProjectController::class)->prefix('project')->as('project.')->group(function () {
            Route::get('/current', 'current')->name('current');
            Route::get('/finished', 'finished')->name('finished');
        });
        Route::resource('project', AdminProjectController::class)->parameters([
            'project' => 'slug'
        ]);


        /* ADMIN COMPANY */
        Route::get('/company/company', [AdminCompanyController::class, 'company'])->name('company.company');
        Route::get('/company/individual', [AdminCompanyController::class, 'individual'])->name('company.individual');

        Route::resource('company', AdminCompanyController::class)->parameters([
            'company' => 'id'
        ]);

        /* ADMIN INVESTMENT */
        Route::controller(AdminInvestmentController::class)->prefix('investment')->as('investment.')->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/create', 'create')->name('create');
            Route::post('/store', 'store')->name('store');
            Route::get('/edit/{id}', 'edit')->name('edit');
            Route::put('/update/{id}', 'update')->name('update');
            Route::delete('/destroy{id}', 'destroy')->name('destroy');
        });

        /* ADMIN PAYMENT */
        Route::controller(AdminPaymentController::class)->prefix('payment')->as('payment.')->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('new', 'new')->name('new');
            Route::get('expired', 'expired')->name('expired');
            Route::get('completed', 'completed')->name('completed');
            Route::get('canceled', 'canceled')->name('canceled');

            Route::get('create', 'create')->name('create');
            Route::post('store', 'store')->name('store');
            Route::get('edit/{id}', 'edit')->name('edit');
            Route::put('update/{id}', 'update')->name('update');
            Route::delete('destroy/{id}', 'destroy')->name('destroy');
        });


        /* ADMIN APPLICATION */
        Route::controller(AdminApplicationController::class)->prefix('application')->as('application.')->group(function () {
            Route::get('/', 'index')->name('index');
            Route::get('/api/all', 'apiAll')->name('api.all');
            Route::get('/api/finished', 'apiFinished')->name('api.finished');
            Route::get('/api/new', 'apiNew')->name('api.new');
            Route::get('/pending', 'pending')->name('pending');
            Route::get('/finished', 'finished')->name('finished');
            Route::delete('/{id}/story-brief/remove', 'removeBriefImage')->name('storyBrief.remove');
            Route::get('/finished', 'finished')->name('finished');
            Route::get('/create', 'create')->name('create');
            Route::post('/store', 'store')->name('store');
            Route::get('/edit/{id}', 'edit')->name('edit');
            Route::put('/update/{id}', 'update')->name('update');
            Route::delete('/delete/{id}', 'destroy')->name('delete');
        });



        /* ADMIN MEDIA */
        Route::controller(MediaController::class)->prefix('media')->as('media.')->group(function () {
            Route::post('/video/{id}/preview', 'videoPreviewUpload')->name('video.preview.upload');
            Route::delete('/video/{id}/preview/delete/', 'videoPreviewDestroy')->name('video.preview.destroy');
            Route::delete('/video/{id}/delete', 'videoDestroy')->name('video.destroy');
            Route::post('/video/{id}/generate/thumb', 'videoGenerateThumb')->name('video.generate.thumb');
            Route::delete('/image/{id}/delete', 'imageDestroy')->name('image.destroy');
        });


        Route::delete('/logout', [AdminLoginController::class, 'destroy'])->name('logout');
    });
});



require __DIR__ . '/auth.php';
