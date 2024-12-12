<?php

namespace App\Actions\DTO;

use App\Traits\Makable;
use Illuminate\Http\Request;

class InvestmentCreateDTO
{
    use Makable;

    public function __construct(
        public readonly string $project_id,
        public readonly string $company_id,
        public readonly ?string  $status,
    ){}

    public static function fromRequest(Request $request)
    {
        return static::make(...$request->only(['company_id', 'project_id', 'status']));
    }
}
