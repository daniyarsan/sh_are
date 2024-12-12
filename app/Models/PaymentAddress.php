<?php

namespace App\Models;

use App\QueryBuilders\PaymentAddressQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'address',
        'investment_id',
        'currency_id',
    ];


    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function investment()
    {
        return $this->belongsTo(Investment::class);
    }

    public function newEloquentBuilder($query): PaymentAddressQueryBuilder
    {
        return new PaymentAddressQueryBuilder($query);
    }
}
