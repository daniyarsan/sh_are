<?php

namespace App\Http\ViewModels;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Traits\Makable;

class ProjectViewModel
{
    use Makable;

    public function projectBySlug($slug)
    {
        return ProjectResource::make(Project::eager()->where(['slug' => $slug])->first());
    }

    public function featuredProject()
    {
        return ProjectResource::make(Project::featured()->eager()->first());
    }

    public function finishedProject()
    {
        return ProjectResource::make(Project::finished()->eager()->first());
    }

    public function finishedProjects()
    {
        return ProjectResource::collection(Project::finished()->eager()->get());
    }

    public function currentProjects()
    {
        return ProjectResource::collection(Project::current()->eager()->get());
    }

    public function newProjects()
    {
        return ProjectResource::collection(Project::new()->eager()->get());
    }
}
