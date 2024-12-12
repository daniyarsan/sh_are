<?php

namespace App\Traits\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait HasSlug
{
    protected static function bootHasSlug() {

        static::creating(function (Model $item) {
            $item->slug = Str::slug($item->name);
        });
    }
}
