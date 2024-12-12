<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Schedule::command('investment:status-update')->everyMinute()->before(function () {
    \Illuminate\Support\Facades\Log::info("The database backup script executed at " . time());
});
