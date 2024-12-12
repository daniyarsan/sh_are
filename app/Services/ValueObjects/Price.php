<?php

namespace App\Services\ValueObjects;

use App\Traits\Makable;
use \InvalidArgumentException;

use Stringable;

class Price implements Stringable
{
    use Makable;

    private array $currencies = [
        'USD' => '$',
        'EUR' => '$',
    ];

    public function __construct(protected $value, private readonly string $currency = 'USD', private readonly int $precision = 100)
    {
        if ($value < 0) {
            throw new InvalidArgumentException('Value cannot be null');
        }
        if (!$this->value) {
            $this->value = 0;
        }

        if (!isset($this->currencies[$this->currency])) {
            throw new InvalidArgumentException('No such currency available in database');
        }
    }

    public function value(): float|int
    {
        return $this->value;
    }

    public function currency()
    {
        return $this->currency;
    }

    public function symbol()
    {
        return $this->currencies[$this->currency];
    }

    public function __toString(): string
    {
        return number_format($this->value(), 2, ',', ' ') . ' ' . $this->symbol();
    }

    public function toArray()
    {
        return [
            'value' => $this->value,
            'currency' => $this->currency(),
            'formatted' => ($this->value > 2 ?  number_format($this->value, 0, ',', ' ') : $this->value . ' ' ) . ' ' . $this->symbol(),
            'short' => $this->getShortMlns($this->value) . ' ' . $this->symbol(),
        ];
    }

    private function getShortMlns($n)
    {
        // first strip any formatting;
        $n = (0 + str_replace(",", "", $n));

        // is this a number?
        if (!is_numeric($n)) return false;

        // now filter it;
        if ($n > 1000000000000) return round(($n / 1000000000000), 2) . ' MMln.';
        elseif ($n > 1000000000) return round(($n / 1000000000), 2) . ' Bl.';
        elseif ($n >= 1000000) return round(($n / 1000000), 2) . ' M.';

        return number_format($n);
    }
}
