<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Investment>
 */
class InvestmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'created_at' => fake()->dateTimeThisYear()
//            'status' => fake()->randomElement(['new', 'pending', 'canceled'])
        ];
    }

    public function amount()
    {
        return $this->state(fn (array $attributes) => [
            'amount' => fake()->numberBetween(100000, 999999),
        ]);
    }

    public function fresh()
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'new',
        ]);
    }

    public function completed()
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
        ]);
    }

}
