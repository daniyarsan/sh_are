<?php

namespace App\Repository;

use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;

class ProjectRepository
{

    public function list():Collection
    {
        return Project::query()->with([])->get();
    }

    public function one(int $id): Project
    {
        return Project::query()->with(['votes'])->where(['id' => $id])->firstOrFail();
    }

    public function oneBySlug(string $slug): Project
    {
        return Project::query()->with(['votes'])->where(['slug' => $slug])->firstOrFail();
    }

    public function finishedProject()
    {
        return Project::query()->with(['votes'])->where(['finished' => true])->first();
    }

    public function finishedProjects()
    {
        return Project::query()->with(['votes'])->where(['finished' => true])->get();
    }

    public function currentProjects()
    {
        return Project::query()->with(['votes'])->where(['finished' => false, 'new' => false])->get();
    }

    public function currentProject($projectId)
    {
        return Project::query()->with(['votes'])->where(['finished' => false, 'new' => false, 'id' => $projectId])->first();
    }

    public function newProjects()
    {
        return Project::query()->with(['votes'])->where(['new' => true])->get();
    }


}
