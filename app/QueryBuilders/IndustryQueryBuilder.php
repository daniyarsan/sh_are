<?php

namespace App\QueryBuilders;

use App\Models\Investment;
use Illuminate\Database\Eloquent\Builder;

class IndustryQueryBuilder extends Builder
{
    public function eager()
    {
        return $this->with(['categories', 'projects.investments']);
    }

}
