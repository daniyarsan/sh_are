<?php

namespace App\Collections;

use Illuminate\Database\Eloquent\Collection;

class CurrencyCollection extends Collection
{
    public function options()
    {
        return $this->map(function($item) {
            return ['value' => $item->id, 'label' => $item->name];
        });

    }
}
