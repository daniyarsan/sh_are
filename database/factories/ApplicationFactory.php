<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->firstName(),
            "username" => fake()->word(),
            'story_brief' => fake()->sentence(),
            "finished" => false,
            'created_at' => fake()->dateTimeThisYear()
        ];
    }

    public function finished()
    {
        return $this->state(fn (array $attributes) => [
            'story_title' => fake()->words(2, true),
            'story_description' => fake()->realText(),
            'invested' => fake()->numberBetween(100000, 999999),
            'finished' => true,
        ]);
    }
}
