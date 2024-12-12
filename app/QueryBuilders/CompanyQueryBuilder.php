<?php

namespace App\QueryBuilders;

use App\Models\Company;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class CompanyQueryBuilder extends Builder
{

    public function expired(): CompanyQueryBuilder
    {
        return $this->where(['status' => 'new'])->where('created_at', '<', Carbon::now()->second(Payment::PAYMENT_TTL)->toDateTimeString());
    }

    public function companies(): CompanyQueryBuilder
    {
        return $this->where(['type' => Company::TYPE_COMPANY]);
    }

    public function individuals(): CompanyQueryBuilder
    {
        return $this->where(['type' => Company::TYPE_INDIVIDUAL]);
    }

    public function eager()
    {
        return $this->with(['investments.project.industry']);
    }

    public function newerThan(?int $period): CompanyQueryBuilder
    {
        if ($period) {
            $this->where('created_at', '>', \Illuminate\Support\Carbon::now()->subDays($period)->toDateTimeString())->get();
        }

        return $this;
    }

}
