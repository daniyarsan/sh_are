<?php

it('loads home page successfully', function () {
    $response = $this->get('/');
    $response->assertStatus(200);
});
