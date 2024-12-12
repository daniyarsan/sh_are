<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Inertia\Inertia;

class CompanyController extends Controller
{
    public function index()
    {
        return Inertia::render('company/Index', [
//            'companies' => CompanyViewModel::make()->allCompanies(),
//            'month' => CompanyViewModel::make()->investmentsPerDays(30),
//            'season' => CompanyViewModel::make()->investmentsPerDays(90),
//            'year' => CompanyViewModel::make()->investmentsPerDays(360),
        ]);
    }
    public function one(string $slug)
    {
        return Inertia::render('company/One', [
            'company' => Company::eager()->where(['slug' => $slug])->first(),
        ]);
    }
}
