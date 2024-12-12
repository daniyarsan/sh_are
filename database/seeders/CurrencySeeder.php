<?php

namespace Database\Seeders;

use Database\Factories\CurrencyFactory;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    public function run(): void
    {
        CurrencyFactory::new()->create([
            'name' => 'EUR'
        ]);
        CurrencyFactory::new()->create([
            'name' => 'USD'
        ]);

    }

}



