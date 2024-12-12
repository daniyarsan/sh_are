<?php

namespace App\QueryBuilders;

use App\Models\Investment;
use Illuminate\Database\Eloquent\Builder;

class ProjectQueryBuilder extends Builder
{

    public function expired(): ProjectQueryBuilder
    {
        return $this->where(['status' => Investment::STATUS_NEW]);
    }

    public function new(): ProjectQueryBuilder
    {
        return $this->where(['new' => true]);
    }

    public function current(): ProjectQueryBuilder
    {
        return $this->where(['finished' => false, 'new' => false, 'featured' => false]);
    }

    public function currentAndNew(): ProjectQueryBuilder
    {
        return $this->where(['finished' => false, 'new' => true, 'featured' => false]);
    }

    public function finished(): ProjectQueryBuilder
    {
        return $this->where(['finished' => true]);
    }

    public function featured(): ProjectQueryBuilder
    {
        return $this->where(['featured' => true]);
    }

    public function eager()
    {
        return $this->with(['votes' ,'investments.company']);
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
