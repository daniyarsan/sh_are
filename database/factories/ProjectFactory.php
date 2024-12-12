<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(2),
            'content' => fake()->realText(500),
            'finished' => fake()->randomElement([true, false]),
            'featured' => false,
            'new' => fake()->randomElement([true, false]),
            'cost' => fake()->numberBetween(100000, 10000000),
            'target_votes' => fake()->numberBetween(10, 500),
            'created_at' => fake()->dateTimeThisYear()
        ];
    }

    public function current()
    {
        return $this->state([
            'finished' => false,
            'new' => false,
        ]);
    }
}
