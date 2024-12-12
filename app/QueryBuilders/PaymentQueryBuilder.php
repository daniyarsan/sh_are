<?php

namespace App\QueryBuilders;

use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class PaymentQueryBuilder extends Builder
{

    public function fresh(): PaymentQueryBuilder
    {
        return $this->where(['status' => Payment::STATUS_NEW])->where('created_at', '<', Carbon::now()->second(Payment::PAYMENT_TTL)->toDateTimeString());
    }

    public function completed(): PaymentQueryBuilder
    {
        return $this->where(['status' => Payment::STATUS_COMPLETED]);
    }

    public function canceled(): PaymentQueryBuilder
    {
        return $this->where(['status' => Payment::STATUS_CANCELED]);
    }

    public function expired(): PaymentQueryBuilder
    {
        return $this->where(['status' => Payment::STATUS_NEW])->where('created_at', '>', Carbon::now()->second(Payment::PAYMENT_TTL)->toDateTimeString());
    }

    public function eager(): PaymentQueryBuilder
    {
        return $this->with(['currency', 'investment']);
    }


}

//->select(['id', 'title', 'slug'])
