<?php

namespace App\Models;

use App\Collections\ProjectCollection;
use App\QueryBuilders\ProjectQueryBuilder;
use App\Services\ValueObjects\Price;
use App\Traits\Model\HasSlug;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    use HasSlug;

    const STATUS_FINISHED = 'finished';
    const STATUS_NEW = 'new';
    const STATUS_ACTIVE = 'active';

    protected $casts = [
        'new' => 'boolean',
        'finished' => 'boolean',
        'created_at' => 'datetime:Y-m-d'
    ];



    protected $fillable = ['name', 'image_path', 'mobile_image_path', 'custom_url', 'cost', 'target_votes', 'content', 'finished', 'new', 'industry_id'];


    public function invested()
    {
        return $this->investments->sumAmount();
    }

    public function status(): string
    {
        return $this->finished ? "finished" : ($this->new ? "new" : "active");
    }
    /* Relations */

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }

    public function investments()
    {
        return $this->hasMany(Investment::class)->where(['status' => Investment::STATUS_COMPLETED]);
    }

    public function shares(): array
    {
        $currentProject = $this;

        $shares = Investment::query()->groupByCompany()->where('project_id', $this->id)->get()->map(function ($share) use($currentProject) {
            $investedPercentage = ($share->invested * 100) / $currentProject->cost;
            $share->percentage = $investedPercentage > 100 ? 100 : $investedPercentage;
          return $share;
        });

        return $shares->toArray();
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class);
    }

    /* Methods */

    public function investedPercentage(): ?int
    {
        $value = ($this->invested() * 100) / $this->cost;

        return  $value > 100 ? 100 : ($this->invested() * 100) / $this->cost;
    }


    /* Custom builders and collections */

    public function newEloquentBuilder($query): ProjectQueryBuilder
    {
        return new ProjectQueryBuilder($query);
    }

    public function newCollection(array $models = []): ProjectCollection
    {
        return new ProjectCollection($models);
    }
}
