<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\CategoryFactory;
use Database\Factories\IndustryFactory;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $industries = $this->getIndustries();
        foreach ($industries as $key => $industry) {
            $industryFactory = IndustryFactory::new()->create(['name' => $key]);
            foreach ($industry as $category) {
                CategoryFactory::new()->for($industryFactory)->create(['name' => $category]);
            }
        }
    }

    private function getIndustries(): array
    {
        return [
            "Social" => [
                "People",
                "Animals",
                "Homeless",
                "Youth",
                "Workers",
            ],
            "Organizations" => [
                "Оrphanage",
                "Retirement",
                "Hospice",
            ],
            "Cultural" => [
                "Artists",
                "Musicians",
                "Sculptors",
                "Etno art",
            ],
        ];
    }
}



