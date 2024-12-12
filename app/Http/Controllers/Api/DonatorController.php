<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ApiFilterRequest;
use App\Http\Resources\ApplicationResource;
use App\Http\ViewModels\ApplicationViewModel;
use App\Http\ViewModels\CompanyViewModel;
use App\Models\Application;
use App\Services\ValueObjects\Price;
use Illuminate\Http\Request;

class DonatorController extends Controller
{
    private const PAGINATION_SIZE = 12;

    public function index(ApiFilterRequest $request)
    {
        return CompanyViewModel::make()->donatorResource(
            self::PAGINATION_SIZE,
            $request->get('period'),
            $request->get('order', 'desc')
        );
    }
}
