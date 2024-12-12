<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiInvestmentFilterRequest;
use App\Http\Resources\InvestmentResource;
use App\Models\Investment;
use App\Services\ApiResponseClass;

class InvestmentController extends Controller
{

    public function index(ApiInvestmentFilterRequest $request)
    {
        return InvestmentResource::collection(
            Investment::query()->getByFilter($request->get('status'), $request->get('project'))->get()
        );
    }


    public function profile(ApiInvestmentFilterRequest $request)
    {
        $currentUser = auth()->user();
        if (!$currentUser) {
            ApiResponseClass::throw('UserNotFoundError', 'Not authorized request');
        }

        return InvestmentResource::collection(
            Investment::query()->getByFilter(
                $request->get('status'),
                $request->get('project'),
                $currentUser->company->id)->get()
        );
    }
}
