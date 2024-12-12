<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiFilterRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\ViewModels\ApplicationViewModel;
use App\Http\ViewModels\CompanyViewModel;
use App\Models\Application;
use App\Services\ValueObjects\Price;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    private const PAGINATION_SIZE = 12;

    public function index(ApiFilterRequest $request)
    {
        return ApplicationViewModel::make()->caseResource(
            self::PAGINATION_SIZE,
            $request->get('period'),
            $request->get('order', 'desc')
        );
    }

    public function all()
    {
        return ApplicationViewModel::make()->allFinishedApplications();
    }

    public function invested()
    {
        return Price::make(Application::finished()->get()->sumInvested())->toArray();
    }



}
