<?php

namespace App\Actions\DTO;

use App\Traits\Makable;
use Illuminate\Http\Request;

class PaymentCreateDTO
{
    use Makable;

    public function __construct(
        public readonly string $amount,
        public readonly string $currency_id,
        public readonly string $investment_id,
        public readonly ?string $status,
    ){}

    public static function fromRequest(Request $request)
    {
        return static::make(...$request->only(['investment_id', 'currency_id', 'amount', 'status']));
    }
}
