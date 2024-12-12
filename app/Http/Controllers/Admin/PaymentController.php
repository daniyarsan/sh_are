<?php

namespace App\Http\Controllers\Admin;

use App\Actions\DTO\PaymentCreateDTO;
use App\Actions\PaymentAction;
use App\Http\Controllers\Controller;
use App\Models\Currency;
use App\Models\Investment;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        return view('admin.payment.index', ['entities' => Payment::query()->orderBy('id', 'DESC')->get()]);
    }

    public function new(Request $request)
    {
        return view('admin.payment.index', ['entities' => Payment::query()->fresh()->orderBy('id', 'DESC')->get()]);
    }

    public function expired(Request $request)
    {
        return view('admin.payment.index', ['entities' => Payment::expired()->orderBy('id', 'DESC')->get()]);
    }

    public function canceled(Request $request)
    {
        return view('admin.payment.index', ['entities' => Payment::canceled()->orderBy('id', 'DESC')->get()]);
    }

    public function completed(Request $request)
    {
        return view('admin.payment.index', ['entities' => Payment::completed()->get()]);
    }

    public function create()
    {
        $currencies = Currency::all();
        $investments = Investment::byStatus(Payment::STATUS_NEW)->get();

        return view('admin.payment.create', [
            'currencies' => $currencies,
            'investments' => $investments,
        ]);
    }

    public function store(Request $request, PaymentAction $action)
    {
        $validated = $request->validate([
            'amount' => 'required|integer',
            'investment_id' => 'required',
            'currency_id' => 'required',
            'status' => 'required',
        ]);
        try {
            $action->create(PaymentCreateDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'create') {
            return redirect()->route('admin.payment.create');
        }

        return redirect()->route('admin.payment.index')->withSuccess('Платеж создан успешно');
    }

    public function edit($id)
    {
        $payment = Payment::eager()->where(['id' => $id])->first();

        if (!$payment) {
            return redirect()->route('admin.payment.index')->withErrors(['Такого обьекта в базе нет']);
        }

        $currencies = Currency::all();
        $investments = Investment::byStatus(Payment::STATUS_PENDING)->get();

        return view('admin.payment.edit', [
            'currencies' => $currencies,
            'investments' => $investments,
            'payment' => $payment,
        ]);
    }


    public function update($id, Request $request, PaymentAction $action)
    {
        $request->validate([
            'amount' => 'required|integer',
            'investment_id' => 'required',
            'currency_id' => 'required',
            'status' => 'required',
        ]);

        try {
            $action->update($id, PaymentCreateDTO::fromRequest($request));
        } catch (\Throwable $exception) {
            return redirect()->back()->withErrors([
                $exception->getMessage()
            ]);
        }

        if ($request->action == 'save') {
            return back()->with('success', 'Редактирование успешно');
        }

        return redirect()->route('admin.payment.index')->with('success', 'Редактирование успешно');
    }



    public function destroy($id)
    {
        $investment = Payment::find($id);

        if (!$investment) {
            return redirect()->back()->withErrors([
                'Вклад не найден',
            ]);
        }

        $investment->delete();

        return redirect()->back()->withSuccess('Удален успешно');
    }
}
