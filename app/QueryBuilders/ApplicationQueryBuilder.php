<?php

namespace App\QueryBuilders;

use App\Models\Investment;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

class ApplicationQueryBuilder extends Builder
{

    public function finished(): ApplicationQueryBuilder
    {
        return $this->where(['finished' => true]);
    }

    public function fresh(): ApplicationQueryBuilder
    {
        return $this->where(['finished' => false]);
    }

    public function filtered(?int $period): ApplicationQueryBuilder
    {
        if ($period) {
            $this->where('created_at', '>', Carbon::now()->subDays($period)->toDateTimeString())->get();
        }

        return $this;
    }

    public function orderByInvest($order): ApplicationQueryBuilder
    {
        return $this->orderBy('invested', $order ? $order : 'asc');
    }

    public function pending(): ApplicationQueryBuilder
    {
        return $this->where(['finished' => false]);
    }

    public function newerThan(?int $period): ApplicationQueryBuilder
    {
        if ($period) {
            $this->where('created_at', '>', \Illuminate\Support\Carbon::now()->subDays($period)->toDateTimeString())->get();
        }

        return $this;
    }

//    public function expired(): ApplicationQueryBuilder
//    {
//        return $this->where(['status' => Investment::STATUS_NEW]);
//    }

//    public function current(): ApplicationQueryBuilder
//    {
//        return $this->where(['finished' => false, 'new' => false]);
//    }
//

//
//    public function new(): ApplicationQueryBuilder
//    {
//        return $this->where(['new' => true]);
//    }

    public function eager()
    {
        return $this->with(['videos', 'images', 'company']);
    }

}


//public function list():Collection
//    {
//        return Project::query()->with([])->get();
//    }
//
//    public function one(int $id): Project
//{
//    return Project::query()->with(['votes'])->where(['id' => $id])->firstOrFail();
//}
//
//    public function oneBySlug(string $slug): Project
//{
//    return Project::query()->with(['votes'])->where(['slug' => $slug])->firstOrFail();
//}
//
//    public function finishedProject()
//{
//    return Project::query()->with(['votes'])->where(['finished' => true])->first();
//}
//
//    public function finishedProjects()
//{
//    return Project::query()->with(['votes'])->where(['finished' => true])->get();
//}
//
//    public function currentProjects()
//{
//    return Project::query()->with(['votes'])->where(['finished' => false, 'new' => false])->get();
//}
//
//    public function currentProject($projectId)
//{
//    return Project::query()->with(['votes'])->where(['finished' => false, 'new' => false, 'id' => $projectId])->first();
//}
//
//    public function newProjects()
//{
//    return Project::query()->with(['votes'])->where(['new' => true])->get();
//}
