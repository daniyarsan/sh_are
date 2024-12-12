<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\ViewModels\ProjectViewModel;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {
        return Inertia::render('project/Index', array(
            'fresh' => ProjectViewModel::make()->newProjects(),
            'finished' => ProjectViewModel::make()->finishedProjects()
        ));
    }

    public function one(string $slug)
    {
        return Inertia::render('project/One', [
            'project' => ProjectViewModel::make()->projectBySlug($slug)
        ]);
    }

}
