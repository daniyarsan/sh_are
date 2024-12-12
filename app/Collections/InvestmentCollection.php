<?php

namespace App\Collections;

use App\Services\ValueObjects\Price;
use Illuminate\Database\Eloquent\Collection;

class InvestmentCollection extends Collection
{

    public function sumAmount(): float
    {
        return $this->sum('amount');
    }


    public function countProjects()
    {
        return $this->groupBy(function($investment) {
            return $investment->project->name;
        })->count();
    }

    public function groupByIndustry()
    {
        return $this
            ->groupBy(function($item) {
                return $item->project->industry->id;
            })
            ->map(function (InvestmentCollection $investment)  {
                return [
                    'percentage' => $this->sumAmount() > 0 ? ($investment->sumAmount() * 100) / $this->sumAmount() : 0,
                    'amount' => (new Price($investment->sumAmount()))->toArray()
                ];
        });
    }


    public function groupByCompany(int|bool $totalCost = false)
    {
        $totalCost = $totalCost ? $totalCost : $this->sumAmount();
        $totalCost = $totalCost > $this->sumAmount() ? $totalCost : $this->sumAmount();

        return $this->groupBy(function($item) {
                return $item->company->id;
            })->map(function (InvestmentCollection $investment) use ($totalCost)  {
                return [
                    'percentage' => ($investment->sumAmount() * 100) / $totalCost,
                    'amount' => (new Price($investment->sumAmount()))->toArray()
                ];
            });
    }



//    public function sumTotalPrice(): float
//    {
//        return $this->sum('total_price');
//    }
//
//    public function weightedPricePerShare(): float
//    {
//        if ($this->sumQuantity() === 0.00) {
//            return 0;
//        }
//
//        $sumOfProducts = $this
//            ->sum(fn (Transaction $transaction) =>
//                $transaction->quantity * $transaction->price_per_share
//            );
//
//        return $sumOfProducts / $this->sumQuantity();
//    }



}
