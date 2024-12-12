<?php

use App\Models\Industry;
use App\Models\Project;
use App\Services\ValueObjects\Price;
use Database\Factories\CompanyFactory;
use Database\Factories\InvestmentFactory;

it('cost is array of values from Price object', function () {
    $cost = 1000000;
    $industry = Industry::factory()->create();
    $project = Project::factory()->for($industry)->create(['cost' => $cost]);
    expect($project->cost)->toEqual((new Price($cost))->toArray());
});

it('counts votes correctly', function () {
    $cost = 1000000;
    $industry = Industry::factory()->create();
    $this->project = Project::factory()->for($industry)->create(['cost' => $cost]);
    expect($this->project->cost)->toEqual((new Price($cost))->toArray());
});

it('has correct statuses', function() {
    $industry = Industry::factory()->create();
    $project = Project::factory()->for($industry)->create([Project::STATUS_FINISHED => true]);
    $this->assertEquals($project->status, Project::STATUS_FINISHED);
    $project = Project::factory()->for($industry)->create([Project::STATUS_NEW => true, Project::STATUS_FINISHED => false]);
    $this->assertEquals($project->status, Project::STATUS_NEW);
    $project = Project::factory()->for($industry)->create([Project::STATUS_NEW => false, Project::STATUS_FINISHED => false]);
    $this->assertEquals($project->status, Project::STATUS_ACTIVE);
});


it('has industry', function () {
    $industry = Industry::factory()->create(['name' => 'Medicine']);
    $project = Project::factory()->for($industry)->create(['cost' => 1000000]);
    $this->assertEquals($project->industry()->first()->name, "Medicine");
});


