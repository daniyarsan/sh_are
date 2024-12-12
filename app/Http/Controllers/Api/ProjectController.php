<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiCompanyRequest;
use App\Http\Requests\Api\ApiFilterRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\ViewModels\ApplicationViewModel;
use App\Http\ViewModels\CompanyViewModel;
use App\Models\Application;
use App\Models\Company;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    private const PAGINATION_SIZE = 12;

//    public function index(ApiCompanyRequest $request)
//    {
//        return CompanyViewModel::make()->companyResource(
//            self::PAGINATION_SIZE,
//            $request->get('period'),
//            $request->get('order', 'desc')
//        );
//    }

    public function options()
    {
        return (Project::query()->currentAndNew()->get())->options()->toArray();
    }

}
