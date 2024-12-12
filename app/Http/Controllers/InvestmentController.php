<?php

namespace App\Http\Controllers;

use App\Actions\Contracts\InvestmentActionContract;
use App\Actions\DTO\InvestmentCreateDTO;
use App\Http\Requests\Investment\InvestmentCreateRequest;
use App\Models\Application;
use App\Models\Currency;
use App\Models\Investment;
use App\Models\Payment;
use App\Models\Project;
use Inertia\Inertia;

class InvestmentController extends Controller
{
    public function index(string $slug = null)
    {
        $project = Project::where([
            'slug' => $slug
        ]);

        return Inertia::render('investment/Index', [
            'currentProject' => $project->exists() ? $project->first() : false,
        ]);
    }

    public function store(InvestmentCreateRequest $request, InvestmentActionContract $action)
    {
        $validated = $request->validated();

        $currentCompany = auth()->user()->company;

        try {
            $paymentCount = Investment::query()->fresh()->where([
                'company_id' => $currentCompany
            ])->count();

            if ($paymentCount >= Payment::MAX_NEW_PAYMENTS) {
                throw new \Exception('Вы превысили максимально возможное колличество активных платежей');
            }

            $action->create(InvestmentCreateDTO::make(
                $validated['project'],
                $currentCompany->id,
                Investment::STATUS_NEW
            ));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        return redirect()->route('investment.payments.index')->withSuccess('Платежный запрос отправлен!');
    }


    public function payments()
    {
        return Inertia::render('profile/Payments');
    }

    public function delete(int $id)
    {
        $investment = auth()->user()->company->investments()->find($id);

        if (!$investment) {
            return redirect()->back()->withErrors([
                'Вклад не найден',
            ]);
        }

        $investment->delete();

        return redirect()->back()->withSuccess('Платеж удален успешно');
    }

}
