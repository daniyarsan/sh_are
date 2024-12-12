<?php

namespace App\Http\Controllers;

use App\Http\ViewModels\CompanyViewModel;
use App\Http\ViewModels\ProjectViewModel;
use App\Models\Industry;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('main/Home', [
            'companies' => CompanyViewModel::make()->allActive(),
            'featuredProject' => ProjectViewModel::make()->featuredProject(),
            'finishedProject' => ProjectViewModel::make()->finishedProject(),
            'currentProjects' => ProjectViewModel::make()->currentProjects(),
            'newProjects' => ProjectViewModel::make()->newProjects(),

            'industries' => Industry::eager()->orderBy('order', 'ASC')->get(),
        ]);
    }

    public function about()
    {
        return Inertia::render('main/About', []);
    }
}
