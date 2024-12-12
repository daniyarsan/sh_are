<?php

namespace App\Http\Controllers;

use App\Http\Requests\ApplyRequest;
use App\Http\Resources\ApplicationResource;
use App\Models\Application;
use App\Models\Project;
use App\Repository\ApplicationRepository;
use App\Services\ValueObjects\Price;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function index()
    {
//        $applications = Application::finished()->get();
        return Inertia::render('apply/Index');
    }

    public function store(ApplyRequest $request)
    {
        Application::create($request->validated());

        return back()->withSuccess('Ваше обращение успешно доставлено');
    }

}
