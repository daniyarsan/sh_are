<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\User;
use Database\Factories\CompanyFactory;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    public function run(): void
    {
        $this->createFullCompanyEntity([
                ["name" => "John",  'login' => 'john', 'type' => Company::TYPE_INDIVIDUAL],
                ["name" => "Ron & co", 'login' => 'ron', 'type' => Company::TYPE_COMPANY],
            ]
        );
    }

    protected function createFullCompanyEntity(array $data) {

        foreach ($data as $item) {
            $user = User::factory()->create([
                'name' => $item['name'],
                'login' => $item['login'],
            ]);

           CompanyFactory::new()->for($user)->create([
                'name' => $item['name'],
                'type' => $item['type'],
                'image_path' => isset($item['image_path']) ? $item['image_path'] : '',
            ]);

        }

    }

}



