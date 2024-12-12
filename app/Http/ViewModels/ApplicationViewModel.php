<?php

namespace App\Http\ViewModels;

use App\Http\Resources\ApplicationResource;
use App\Http\Resources\CompanyResource;
use App\Models\Application;
use App\Models\Company;
use App\Traits\Makable;

class ApplicationViewModel
{
    use Makable;


    public function allFinishedApplications()
    {
        return ApplicationResource::collection(Application::finished()->orderBy('id', 'desc')->with(['company'])->get());
    }

    public function caseResource(int $limit, ?int $period, string $order = 'desc')
    {
        $applicationQueryBuilder = Application::query()
            ->eager()
            ->finished()
            ->newerThan($period)
            ->orderByInvest($order);

        return ApplicationResource::collection($applicationQueryBuilder->paginate($limit));
    }

}
