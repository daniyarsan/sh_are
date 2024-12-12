<?php

namespace App\Collections;

use Illuminate\Database\Eloquent\Collection;

class CompanyCollection extends Collection
{
    public function slugOptions()
    {
        return $this->map(function($item) {
            return ['slug' => $item->slug, 'name' => $item->name];
        });
    }

    public function options()
    {
        return $this->map(function($item) {
            return ['id' => $item->id, 'name' => $item->name];
        });
    }



}
