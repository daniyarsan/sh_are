<?php

namespace App\Models;

use App\Collections\ApplicationCollection;
use App\QueryBuilders\ApplicationQueryBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime:Y-m-d'
    ];

    protected $fillable = [
        'name',
        'username',
        'invested',
        'finished',
        'story_request',
        'story_request_path',
        'story_title',
        'story_brief',
        'story_description',
        'avatar_path',
        'company_id'
    ];


    public function status()
    {
        return $this->finished ? 'Завершен' : 'Новый';
    }

    public function videos()
    {
        return $this->morphMany(Video::class, 'entity');
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'entity');
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /* Custom builders and collections */

    public function newEloquentBuilder($query): ApplicationQueryBuilder
    {
        return new ApplicationQueryBuilder($query);
    }

    public function newCollection(array $models = []): ApplicationCollection
    {
        return new ApplicationCollection($models);
    }

}
