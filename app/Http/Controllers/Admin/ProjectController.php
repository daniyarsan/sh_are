<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Contracts\ProjectActionContract;
use App\Actions\DTO\ApplicationDTO;
use App\Actions\DTO\ProjectDTO;
use App\Actions\ProjectAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Industry;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function index(Request $request)
    {
        return view('admin.project.index', ['projects' => ProjectResource::collection(Project::all())->toArray($request)]);
    }

    public function current(Request $request)
    {
        return view('admin.project.index', ['projects' => ProjectResource::collection(Project::current()->get())->toArray($request)]);
    }

    public function finished(Request $request)
    {
        return view('admin.project.index', ['projects' => ProjectResource::collection(Project::finished()->get())->toArray($request)]);
    }

    public function create()
    {
        return view('admin.project.create', ['industries' => Industry::all()]);
    }

    public function store(Request $request, ProjectActionContract $action)
    {
        $request->validate([
            'name' => 'required|max:255',
            'content' => 'required',
            'cost' => 'required|',
        ]);

        try {
            $action->create(ProjectDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'create') {
            return redirect()->route('admin.project.create');
        }

        return redirect()->route('admin.application.index')->with('success', 'Сохранено успешно');
    }

    public function edit($slug, Request $request)
    {
        return view('admin.project.edit', [
            'entity' => Project::query()->where(['slug' => $slug])->first(),
            'industries' => Industry::all()
        ]);
    }

    public function update($id, Request $request, ProjectAction $action)
    {
        try {
            $action->update($id, ProjectDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'save') {
            return back()->with('success', 'Редактирование успешно');
        }

        return redirect()->route('admin.application.index')->with('success', 'Редактирование успешно');

    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $slug)
    {
        $project = Project::where(['slug' => $slug]);

        if (!$project) {
            return redirect()->back()->withErrors([
                'Проект не найден',
            ]);
        }

        $project->delete();

        return redirect()->back()->withSuccess('Удален успешно');
    }
}
