<?php

namespace App\Http\Controllers\Admin;

use App\Actions\DTO\InvestmentCreateDTO;
use App\Actions\InvestmentAction;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Investment;
use App\Models\Project;
use Illuminate\Http\Request;

class InvestmentController extends Controller
{

    public function index()
    {
        return view('admin.investment.index', [
            'investments' => Investment::all()
        ]);
    }

    public function create()
    {
        $projects = Project::all();
        $companies = Company::all();

        return view('admin.investment.create', [
            'projects' => $projects,
            'companies' => $companies
        ]);
    }

    public function store(Request $request, InvestmentAction $action)
    {
        $validated = $request->validate([
            'amount' => 'required|integer',
            'company_id' => 'required',
            'project_id' => 'required',
        ]);

        try {
            $action->create(InvestmentCreateDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'create') {
            return redirect()->route('admin.investment.create');
        }

        return redirect()->route('admin.investment.index')->withSuccess('Вклад создан успешно');
    }


    public function edit($id)
    {
        $investment = Investment::find($id);

        $projects = Project::all();
        $companies = Company::all();

        return view('admin.investment.edit', [
            'investment' => $investment,
            'projects' => $projects,
            'companies' => $companies
        ]);
    }

    public function update($id, Request $request, InvestmentAction $action)
    {
        $validated = $request->validate([
            'amount' => 'required|integer',
            'company_id' => 'required',
            'project_id' => 'required',
        ]);

        try {
            $action->update($id, InvestmentCreateDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'save') {
            return back()->with('success', 'Редактирование успешно');
        }

        return redirect()->route('admin.investment.index')->with('success', 'Редактирование успешно');

    }


    public function destroy(string $id)
    {
        $investment = Investment::find($id);

        if (!$investment) {
            return redirect()->back()->withErrors([
                'Вклад не найден',
            ]);
        }

        $investment->delete();

        return redirect()->back()->withSuccess('Удален успешно');
    }
}
