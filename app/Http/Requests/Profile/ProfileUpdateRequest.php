<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'login' => ['nullable', 'string', 'max:255', 'unique:users'],
            'image' => 'nullable|image|mimes:jpeg,jpg,png|max:10000'
        ];
    }

}
