<?php

namespace App\Http\Controllers\Admin;

use App\Actions\Contracts\ApplicationActionContract;
use App\Actions\DTO\ApplicationDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ApplicationTableRequest;
use App\Http\Resources\ApplicationResource;
use App\Models\Application;
use App\Models\Company;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller
{
    public const TABLE_SIZE = 10;

    public function apiAll(ApplicationTableRequest $request)
    {
        $perPage = $request->input('length', self::TABLE_SIZE); // Количество записей на страницу
        $currentPage = ($request->input('start', 0) / $perPage) + 1;

        return ApplicationResource::collection(Application::orderBy('id', 'DESC')->paginate($perPage, ['*'], 'page', $currentPage));
    }

    public function apiNew(ApplicationTableRequest $request)
    {
        $perPage = $request->input('length', self::TABLE_SIZE); // Количество записей на страницу
        $currentPage = ($request->input('start', 0) / $perPage) + 1;

        return ApplicationResource::collection(Application::query()->fresh()->orderBy('id', 'DESC')->paginate($perPage, ['*'], 'page', $currentPage));
    }

    public function apiFinished(ApplicationTableRequest $request)
    {
        $perPage = $request->input('length', self::TABLE_SIZE); // Количество записей на страницу
        $currentPage = ($request->input('start', 0) / $perPage) + 1;

        return ApplicationResource::collection(Application::finished()->orderBy('id', 'DESC')->paginate($perPage, ['*'], 'page', $currentPage));
    }


    public function index(Request $request)
    {
        return view('admin.application.index');
    }

    public function finished(Request $request)
    {
        return view('admin.application.index', ['applications' => ApplicationResource::collection(Application::finished()->get())->toArray($request)]);
    }

    public function pending(Request $request)
    {
        return view('admin.application.index', ['applications' => ApplicationResource::collection(Application::pending()->get())->toArray($request)]);
    }

    public function create()
    {
        return view('admin.application.create', [
            'companies' => Company::all()
        ]);
    }

    public function store(Request $request, ApplicationActionContract $applicationAction)
    {
        $request->validate([
            'video_files.*' => 'mimes:mp4',
            'image_files.*' => 'mimes:jpeg,jpg,png',
        ]);

        try {
            $applicationAction->create(ApplicationDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'create') {
            return redirect()->route('admin.application.create');
        }

        return redirect()->route('admin.application.index')->with('success', 'Создан успешно');
    }


    public function edit($id)
    {
        return view('admin.application.edit', [
            'application' => Application::find($id),
            'companies' => Company::all()
        ]);
    }


    public function update(int $id, Request $request, ApplicationActionContract $applicationAction)
    {
        $request->validate([
            'video_files.*' => 'mimes:mp4',
            'image_files.*' => 'mimes:jpeg,jpg,png',
        ]);

        try {
            $applicationAction->update($id, ApplicationDTO::fromRequest($request));
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
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }


    public function removeBriefImage(string $id)
    {
        $application = Application::find($id);

        if (!$application) {
            return redirect()->back()->withErrors([
                'Заявка не найдена',
            ]);
        }

        if (Storage::disk(Image::IMAGE_DIR)->exists($application->story_request_path)) {
            Storage::disk(Image::IMAGE_DIR)->delete($application->story_request_path);
        }

        $application->story_request_path = null;
        $application->save();

        return redirect()->back()->withSuccess('Удалена успешно');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $application = Application::find($id);

        if (!$application) {
            return redirect()->back()->withErrors([
                'Application не найден',
            ]);
        }

        $application->delete();

        return redirect()->back()->withSuccess('Заявка удалена успешно');
    }
}
