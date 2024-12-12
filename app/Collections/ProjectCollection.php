<?php

namespace App\Collections;

use Illuminate\Database\Eloquent\Collection;

class ProjectCollection extends Collection
{
    public function totalInvested(): float
    {
        return $this->sum(function($project) {
            return $project->investments->sumAmount();
        });
    }

    public function options()
    {
        return $this->map(function($item) {
            return ['value' => $item->id, 'label' => $item->name];
        });
    }

}
