<?php

use App\Services\ValueObjects\Price;

it('it correctly initialize', function () {
    $priceAmount = 1000000;

    $price = new Price($priceAmount);

    expect($price->value())->toEqual($priceAmount);
    $this->assertEquals($price->currency(), 'USD');
    $this->assertEquals( $price->toArray()['currency'], 'USD');
    $this->assertEquals( $price->toArray()['value'], '1000000');
    expect($price->toArray()['formatted'])->toBe('1 000 000 $');
    $this->assertEquals( $price->toArray()['short'], '1 M. $');

});
