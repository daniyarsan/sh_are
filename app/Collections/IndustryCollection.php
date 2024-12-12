<?php

namespace App\Collections;

use Illuminate\Database\Eloquent\Collection;

class IndustryCollection extends Collection
{
    public function options()
    {
        return $this->map(function($item) {
            return ['id' => $item->id, 'name' => $item->name];
        });
    }
}
