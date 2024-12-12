<?php

namespace App\Http\Resources;

use App\Services\ValueObjects\Price;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SharesResource extends JsonResource
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
            'invested' => (new Price($this['invested']))->toArray(),
        ];
    }
}