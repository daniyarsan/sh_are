<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApplyRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\ViewModels\ApplicationViewModel;
use App\Http\ViewModels\CompanyViewModel;
use App\Models\Application;
use App\Models\Company;
use App\QueryBuilders\CompanyQueryBuilder;
use App\Repository\ApplicationRepository;
use App\Services\ValueObjects\Price;
use Inertia\Inertia;

class DonatorController extends Controller
{
    public function index()
    {
        return Inertia::render('donator/Index');
    }

    public function one(int $id)
    {
        $application = Application::query()->eager()->where(['id' => $id, 'finished' => true])->first();

        $nextId  = Application::where('id', '>', $id)->where(['finished' => true])->min('id');

        if ($nextId) {
            $next = Application::query()->eager()->find($nextId);
        } else {
            $next = Application::query()->eager()->first();
        }

        if (!$application) {
            return redirect()->route('application.index');
        }

        return Inertia::render('case/One', [
            'application' => $application,
            'next' => $next
        ]);
    }

}
