<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiProfilePaymentRequest;
use App\Services\ApiResponseClass;

class PaymentController extends Controller
{
    public function all(ApiProfilePaymentRequest $request)
    {
        $validated = $request->validated();
        $currentUser = auth()->user();

        if (!$currentUser) {
            ApiResponseClass::throw('UserNotFoundError', 'Not authorized request');
        }

        $investments = $currentUser->company->investments()->eager();

        if (isset($validated['status'])) {
            $investments->byStatus($validated['status']);
        }

        return ApiResponseClass::sendResponse($investments->get(), '', 200);
    }

}
