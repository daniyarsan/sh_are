<?php

namespace App\Models;

use App\Collections\CurrencyCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public $timestamps = false;
    const BTC = 1;

    use HasFactory;

    public function newCollection(array $models = []): CurrencyCollection
    {
        return new CurrencyCollection($models);
    }


}
