<?php

namespace App\Http\Resources;

use App\Services\ValueObjects\Price;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        if (is_null($this->resource)) {
            return [];
        }
        return [
            ...parent::toArray($request),
            'shares' => SharesResource::collection($this->shares()),
            'invested' => (new Price($this->invested()))->toArray(),
            'cost' => (new Price($this->cost))->toArray(),
            'status' => $this->status(),
            'investments' => InvestmentResource::collection($this->investments),
            'investedPercentage' => $this->investedPercentage(),
        ];
    }
}
