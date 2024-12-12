<?php

namespace App\QueryBuilders;

use App\Models\Investment;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class InvestmentQueryBuilder extends Builder
{

    public function getByFilter(string $status = null, int $projectId = null, int $companyId = null): InvestmentQueryBuilder
    {
        return $this
            ->with(['project:id,name', 'company:id,name,slug'])
            ->when($status, function ($query, $status) {
                return $query->where('status', $status);
            })
            ->when($projectId, function ($query, $projectId) {
                return $query->where('project_id', $projectId);
            })
            ->when($companyId, function ($query, $companyId) {
                return $query->where('company_id', $companyId);
            });
    }


    public function expired(): InvestmentQueryBuilder
    {
        return $this->where(['status' => Investment::STATUS_NEW])->where('created_at', '<', Carbon::now()->second(Payment::PAYMENT_TTL)->toDateTimeString());
    }

    public function byStatus(string $status): InvestmentQueryBuilder
    {
        return $this->where(['status' => $status]);
    }

    public function completed(): InvestmentQueryBuilder
    {
        return $this->where(['status' => Investment::STATUS_COMPLETED]);
    }

    public function fresh(): InvestmentQueryBuilder
    {
        return $this->where(['status' => 'new']);
    }

    public function eager(): InvestmentQueryBuilder
    {
        return $this->with(['project.industry', 'company', 'payment.currency', 'payment.paymentAddress']);
    }

    public function ordered(): InvestmentQueryBuilder
    {
        return $this->orderBy('created_at', 'DESC');
    }

    public function getByDays(int $days = 30)
    {
        return $this->whereBetween('created_at', [now()->subDays($days), now()]);
    }

    public function withRelations()
    {
        return $this->leftJoin('projects', 'projects.id', '=', 'investments.project_id')
            ->leftJoin('companies', 'companies.id', '=', 'investments.company_id')
            ->where('investments.status', Investment::STATUS_COMPLETED)
            ->select(
                'investments.*',
                'projects.name as project_name',
                'projects.custom_url as custom_url',
                'projects.slug as project_slug',
                'companies.name as company_name',
                'companies.slug as company_slug',
            );
    }

    public function groupByCompany()
    {
        return $this->select([
            'projects.id as project_id',
            'companies.id as company_id',
            'companies.name as company_name',
            DB::raw('SUM(investments.amount) as invested'),
        ])
            ->leftJoin('companies', 'companies.id', '=', 'investments.company_id')
            ->leftJoin('projects', 'projects.id', '=', 'investments.project_id')
            ->where('investments.status', Investment::STATUS_COMPLETED)
            ->groupBy('projects.id', 'companies.id', 'companies.name');
    }


    public function pendingButPaid()
    {
        return Investment::query()
            ->leftJoin('payment_addresses as pa', 'pa.investment_id', '=', 'investments.id')
            ->leftJoin('payments as p', 'p.payment_address_id', '=', 'pa.id')
            ->leftJoin('currencies as cur', 'p.currency_id', '=', 'cur.id')
            ->selectRaw('investments.*, p.id as payment_id, p.amount as payment_amount, cur.name as payment_amount_currency_name, cur.id as payment_amount_currency_id')
            ->where(['p.status' => Payment::STATUS_COMPLETED])
            ->whereIn('investments.status', [Investment::STATUS_PENDING, Investment::STATUS_NEW]);
    }
}
