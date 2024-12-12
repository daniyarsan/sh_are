<?php

namespace App\Models;

use App\Collections\InvestmentCollection;
use App\QueryBuilders\InvestmentQueryBuilder;
use App\Services\ValueObjects\Price;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Investment extends Model
{
    use HasFactory;

    public const STATUS_NEW = 'new';
    public const STATUS_PENDING = 'pending';
    public const STATUS_COMPLETED = 'completed';
    public const STATUS_CANCELED = 'canceled';

    public const STATUSES = [self::STATUS_NEW, self::STATUS_PENDING, self::STATUS_COMPLETED, self::STATUS_CANCELED, ];


    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
    ];

    protected $fillable = ['amount', 'company_id', 'project_id', 'payment_id','currency_id', 'status'];



    public function statusLabel()
    {
        switch ($this->status) {
            case self::STATUS_NEW;
                return 'Новый';
            case self::STATUS_CANCELED;
                return 'Отменен';
            case self::STATUS_COMPLETED;
                return 'Завершен';
            default:
                return $this->status;
        }
    }

    /* Relations */

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    public function industry()
    {
        return $this->hasOneThrough(Project::class, Industry::class);
    }

    public function paymentAddress()
    {
        return $this->hasOne(PaymentAddress::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }

    /* Custom builders and collections */

    public function newEloquentBuilder($query): InvestmentQueryBuilder
    {
        return new InvestmentQueryBuilder($query);
    }

    public function newCollection(array $models = []): InvestmentCollection
    {
        return new InvestmentCollection($models);
    }

}
