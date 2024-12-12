<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Currency;
use App\Models\Payment;
use App\Models\Project;
use App\Models\User;
use Database\Factories\InvestmentFactory;
use Illuminate\Database\Seeder;

class InvestmentSeeder extends Seeder
{
    public function run(): void
    {
        InvestmentFactory::new()
            ->for( Company::query()->inRandomOrder()->first())
            ->for(Project::query()->inRandomOrder()->first())
            ->completed()
            ->create([
                'amount' => 50000,
            ]);

    }

}


