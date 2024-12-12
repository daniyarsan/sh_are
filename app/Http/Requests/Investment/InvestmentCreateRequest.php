<?php

namespace App\Http\Requests\Investment;

use App\Models\Payment;
use Illuminate\Foundation\Http\FormRequest;

class InvestmentCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
//            'currency' => 'required',
            'project' => 'required',
//            'amount' => "required|numeric|min:1|max:" . Payment::MAX_DONATION_AMOUNT['RUB'],
        ];
    }


    public function messages() //OPTIONAL
    {
        return [
//            'amount.max' => 'Вы превысили максимально возможное значение',
        ];
    }
}
