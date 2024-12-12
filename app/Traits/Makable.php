<?php

namespace App\Traits;

trait Makable
{

    public static function make(mixed ...$arguments):static
    {
        return new static(...$arguments);
    }
}
