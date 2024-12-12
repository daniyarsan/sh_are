<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    public function index()
    {
        return view('admin.company.index', ['companies' => Company::all()]);
    }

    public function company()
    {
        return view('admin.company.index', ['companies' => Company::company()->get()]);
    }

    public function individual()
    {
        return view('admin.company.index', ['companies' => Company::individual()->get()]);
    }

    public function create()
    {
        return view('admin.company.create', [
            'types' => [
                Company::TYPE_INDIVIDUAL => 'Частное лицо',
                Company::TYPE_COMPANY => 'Компания'
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $data = $request->only(['name', 'description', 'type']);

        if ($request->hasFile('image')) {
            $fileName = time().'.'.$request->image->extension();
            $request->image->storeAs('public/images', $fileName);
            $data = [...$data, 'image_path' => $fileName];
//            $request->image->move(Storage::disk('public')->path('images/projects'), $fileName);
//            $filePath = Storage::disk('public')->put('images/posts/featured-images', request()->file('featured_image'));
        }

        $user = User::create(['name' => $request->name, 'login' => $request->name, 'password' => '123123123']);
        $user->company()->create($data);

        return redirect()->route('admin.company.index')->with('success', 'Участник создан успешно');
    }

    public function edit($id)
    {
        $company = Company::find($id);
        $types =  [
            Company::TYPE_INDIVIDUAL => 'Частное лицо',
            Company::TYPE_COMPANY => 'Компания'
        ];

        return view('admin.company.edit', compact('company', 'types'));
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $company = Company::find($id);
        if (!$company) {
            return redirect()->back()->withErrors([
                'Участник не найден',
            ]);
        }

        $data = $request->only(['name', 'description', 'type']);

        if ($request->hasFile('image')) {
            $fileName = time().'.'.$request->image->extension();
            $request->image->storeAs('public/images', $fileName);
            $data = [...$data, 'image_path' => $fileName];
//            $request->image->move(Storage::disk('public')->path('images/projects'), $fileName);
//            $filePath = Storage::disk('public')->put('images/posts/featured-images', request()->file('featured_image'));
        }

        $company->update($data);


        return redirect()->route('admin.company.index')->with('success', 'Редактирование успешно');
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $company = Company::find($id);

        if (!$company) {
            return redirect()->back()->withErrors([
                'Участник не найден',
            ]);
        }

        $company->delete();

        return redirect()->back()->withSuccess('Удален успешно');
    }
}
