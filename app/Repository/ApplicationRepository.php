<?php

namespace App\Repository;

use App\Models\Application;

class ApplicationRepository
{
    public function list()
    {
        return Application::query()->with([])->get();
    }

    public function finished()
    {
        return Application::query()->where(["finished" => true])->get();
    }

    public function waitingForReview()
    {
        return Application::query()->where(["finished" => false])->get();
    }
}
