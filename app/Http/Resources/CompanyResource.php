<?php

namespace App\Http\Resources;

use App\Services\ValueObjects\Price;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            'investments' => InvestmentResource::collection($this->investments),
//            'shares' => $this->shares(),
//            'invested' => (new Price($this->invested()))->toArray(),
//            'projectsCount' => $this->projectsCount(),
        ];
    }
}
