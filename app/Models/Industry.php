<?php

namespace App\Models;

use App\Collections\IndustryCollection;
use App\QueryBuilders\IndustryQueryBuilder;
use App\Services\ValueObjects\Price;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    use HasFactory;

    protected $appends = ['invested'];

    public $timestamps = false;

    /* Relations */

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function invested()
    {
        return $this->projects->totalInvested();
    }



    /* Custom Attributes */

    public function getInvestedAttribute()
    {
        return (new Price($this->invested()))->toArray();
    }

    /* Custom Builder and Collection */

    public function newEloquentBuilder($query): IndustryQueryBuilder
    {
        return new IndustryQueryBuilder($query);
    }

    public function newCollection(array $models = []): IndustryCollection
    {
        return new IndustryCollection($models);
    }
}
