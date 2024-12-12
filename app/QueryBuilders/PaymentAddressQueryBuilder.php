<?php

namespace App\QueryBuilders;

use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class PaymentAddressQueryBuilder extends Builder
{

    public function randomFree(): PaymentAddressQueryBuilder
    {
        return $this->inRandomOrder()->whereNull('investment_id');
    }


}

