<?php

namespace App\Http\Requests\Api;
use App\Models\Investment;
use App\Models\Payment;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class ApiInvestmentFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'status' => ['nullable', Rule::in(Investment::STATUSES)],
            'project' => 'nullable|integer|exists:projects,id',
        ];
    }

    public function failedValidation(\Illuminate\Support\Facades\Validator|\Illuminate\Contracts\Validation\Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => $validator->errors()->all(),
        ]));
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'status' => $this->input('status', Investment::STATUS_COMPLETED), // Set default to true if not provided
            'project' => $this->input('project', null), // Set default to true if not provided
        ]);
    }

    public function messages() //OPTIONAL
    {
        return [
            'status.integer' => 'Wrong status value',
            'id.integer' => 'Should be an integer value',
        ];
    }

}
