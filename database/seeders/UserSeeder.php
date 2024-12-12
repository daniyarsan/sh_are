<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\ApplicationFactory;
use Database\Factories\CategoryFactory;
use Database\Factories\IndustryFactory;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'admin',
            'login' => 'admin',
            'password' => '123123123'
        ]);

    }

}



