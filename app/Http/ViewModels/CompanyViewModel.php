<?php

namespace App\Http\ViewModels;

use App\Http\Resources\ApplicationResource;
use App\Http\Resources\CompanyResource;
use App\Models\Application;
use App\Models\Company;
use App\Traits\Makable;

class CompanyViewModel
{
    use Makable;

    public function allCompanies(?int $period)
    {
        $companies = Company::with(['investments.project.industry']);

        if ($period) {
            $companies->with(['investments' => function($query) use ($period)
            {
                $query->whereBetween('created_at', [now()->subDays($period), now()]);
            }]);
        }

        $companies->where(['type' => Company::TYPE_COMPANY]);

        return CompanyResource::collection($companies->get());
    }


    public function allActive()
    {
        return Company::query()->where('type', Company::TYPE_COMPANY)->has('investments', '>', 0)->eager()->get();
    }

    public function oneBySlug(string $slug)
    {
        return CompanyResource::make(Company::eager()->where(['slug' => $slug])->first());
    }


    public function donatorResource(int $limit, ?int $period, string $order = 'desc')
    {
        $companyQueryBuilder = Company::query()
            ->where('type', Company::TYPE_INDIVIDUAL)
            ->has('investments', '>', 0)
            ->newerThan($period)
            ->withSum('investments', 'amount')
            ->orderBy('investments_sum_amount', $order);

        return CompanyResource::collection($companyQueryBuilder->paginate($limit));
    }

    public function companyResource(int $limit, ?int $period)
    {
        $companyQueryBuilder = Company::query()
            ->where('type', Company::TYPE_COMPANY)
            ->newerThan($period)
            ->withSum('investments', 'amount');

        return CompanyResource::collection($companyQueryBuilder->paginate($limit));
    }
}
