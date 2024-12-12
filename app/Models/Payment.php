<?php

namespace App\Models;

use App\Collections\PaymentCollection;
use App\QueryBuilders\PaymentQueryBuilder;
use App\Services\ValueObjects\Price;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Payment extends Model
{
//    use HasFormattedFields;
    use HasFactory;

    public const STATUS_NEW = 'new';
    public const STATUS_PENDING = 'pending';
    public const STATUS_COMPLETED = 'completed';
    public const STATUS_CANCELED = 'canceled';

    public const STATUSES = [self::STATUS_NEW, self::STATUS_PENDING, self::STATUS_COMPLETED, self::STATUS_CANCELED, ];

    public const MAX_NEW_PAYMENTS = 3;
    public const MAX_DONATION_AMOUNT = [
        "RUB" => 99999999999,
        "USD" => 99999999999,
    ];
    public const PAYMENT_TTL = 6 * 60;

    protected $appends = ['secondsLeft'];

    public function getSecondsLeftAttribute(): int
    {
        $start = Carbon::parse($this->created_at);
        $now = Carbon::now();
        $diff = Payment::PAYMENT_TTL - $start->diffInSeconds($now);

        return max($diff, 0);
    }

    protected $casts = [
        'created_at' => 'datetime:Y.m.d',
    ];

    protected $fillable = [
        'typeId',
        'amount',
        'payment_address_id',
        'currency_id',
        'txid',
        'status',
    ];


    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    public function investment()
    {
        return $this->hasOne(Investment::class);
    }

    public function paymentAddress()
    {
        return $this->belongsTo(PaymentAddress::class);
    }


    /* Custom builders and collections */

    public function newEloquentBuilder($query): PaymentQueryBuilder
    {
        return new PaymentQueryBuilder($query);
    }

    public function newCollection(array $models = []): PaymentCollection
    {
        return new PaymentCollection($models);
    }



}
