<?php

namespace App\Http\Resources;

use App\Services\ValueObjects\Price;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
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
            'invested' => (new Price($this->invested))->toArray(),
            'status' => $this->status(),
            'videos' => VideoResource::collection($this->videos),
            'images' => ImageResource::collection($this->images),
        ];
    }
}
