<?php

namespace App\Http\Resources;

use App\Services\ValueObjects\Price;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvestmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            ...parent::toArray($request),
            'paymentAddress' => isset($this->paymentAddress->address) ? $this->paymentAddress->address : '',
            'amount' => $this->currency && $this->amount ?  (new Price((float)$this->amount, $this->currency->name))->toArray() : 0,
        ];
    }
}
