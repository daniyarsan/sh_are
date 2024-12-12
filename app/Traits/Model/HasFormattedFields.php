<?php

namespace App\Traits\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;

trait HasFormattedFields
{

    protected function createdAt(): Attribute
    {
        return Attribute::make(get: fn ($value, $attributes) => \Illuminate\Support\Carbon::create($value)->format("m/d/Y"));
    }
}
