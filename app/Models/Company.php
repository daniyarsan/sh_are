<?php

namespace App\Models;

use App\Collections\CompanyCollection;
use App\QueryBuilders\CompanyQueryBuilder;
use App\Services\ValueObjects\Price;
use App\Traits\Model\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    const TYPE_COMPANY = 'company';
    const TYPE_INDIVIDUAL = 'individual';

    use HasFactory;
    use HasSlug;

    protected $fillable = ['name', 'image_path', 'description', 'type', 'wallet'];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d'
    ];

    protected $appends = ['shares', 'invested', 'projectsCount'];


    /* Relations */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function investments()
    {
        return $this->hasMany(Investment::class)->where(['status' => Investment::STATUS_COMPLETED]);
    }


    /* Custom Builder and Collection */

    public function newEloquentBuilder($query): CompanyQueryBuilder
    {
        return new CompanyQueryBuilder($query);
    }

    public function newCollection(array $models = []): CompanyCollection
    {
        return new CompanyCollection($models);
    }


    /* Attributes */


    public function getInvestedAttribute()
    {
        return (new Price($this->investments->sum('amount')))->toArray();
    }


    public function getSharesAttribute()
    {
        $array = $this->investments->groupByIndustry()->toArray();
        $industries = Industry::all()->options();

        foreach ($array as $key => $item) {
            $index = $industries->search(function ($item, $index) use ($key) {
                return $item['id'] == $key;
            });

            $array[$key]['industry'] = $industries->get($index);
        }


        return array_values($array);
    }


    public function getProjectsCountAttribute()
    {
        return max($this->investments->countProjects(), 0);
    }

}
