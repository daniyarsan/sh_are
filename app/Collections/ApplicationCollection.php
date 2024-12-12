<?php

namespace App\Collections;

use Illuminate\Database\Eloquent\Collection;

class ApplicationCollection extends Collection
{
    public function sumInvested(): float
    {
        return $this->sum(function($item) {
            return $item->invested;
        });
    }



}
