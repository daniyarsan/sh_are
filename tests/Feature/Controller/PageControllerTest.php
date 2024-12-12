<?php

use App\Models\Project;
use Inertia\Testing\AssertableInertia as Assert;


it('renders public pages', function (string $path, string $component) {
    $this->get($path)
        ->assertOk()
        ->assertInertia(fn(Assert $page) => $page->component($component));

})->with([
    [
        'path' => '/',
        'component' => 'Main/Home',
    ],
    [
        'path' => '/about',
        'component' => 'About/Home',
    ],
    [
        'path' => '/faq',
        'component' => 'FAQ/Home',
    ],
    [
        'path' => '/investment',
        'component' => 'Investment/Home',
    ],
]);

it('homepage has current projects', function () {
    $industry = \App\Models\Industry::factory()->create();
    Project::factory()->for($industry)->current()->create();

    $this->get('/')->assertInertia(function(Assert $page) {
        $page->component('Main/Home');
    });
});


