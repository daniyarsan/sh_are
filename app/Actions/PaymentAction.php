<?php

namespace App\Actions;

use App\Actions\Contracts\InvestmentActionContract;
use App\Actions\DTO\PaymentCreateDTO;
use App\Models\Currency;
use App\Models\Investment;
use App\Models\Payment;
use App\Models\PaymentAddress;

class PaymentAction extends InvestmentActionContract
{
    public function create(PaymentCreateDTO $DTO):void
    {
        $this->_storeEntity($DTO);
    }

    public function update(int $id, PaymentCreateDTO $DTO)
    {
        $entity = Payment::find($id);
        if (!$entity) {
            return redirect()->back()->withErrors([
                'Обьект не найден',
            ]);
        }

        $this->_storeEntity($DTO, $entity);
    }

    protected function _storeEntity(PaymentCreateDTO $DTO, Payment $entity = null)
    {
        $data = [
            'amount' => $DTO->amount,
            'investment_id' => $DTO->investment_id,
            'currency_id' => $DTO->currency_id,
            'status' => $DTO->status,
        ];

        $currency = Currency::find($DTO->currency_id);
        if (!$currency->exists()) {
            throw new \Exception('Такой валюты не существует');
        }

        $investment = Investment::find($DTO->investment_id);
        if (!$investment->exists()) {
            throw new \Exception('Такого вклада не существует');
        }

        if (!$entity) {
            $randomAddress = PaymentAddress::randomFree()->first();
            $data['payment_address_id'] = $randomAddress->id;
            $entity = Payment::query()->create($data);

            $randomAddress->update(['investment_id' => $investment->id]);
            $randomAddress->save();

            $investment->update(['status' => Investment::STATUS_PENDING]);
            $investment->save();
        } else {
            $entity->update($data);
        }


        $investment->payment_id = $entity->id;
        $investment->save();
    }
}
