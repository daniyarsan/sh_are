<?php

namespace App\Models\Factory;

use App\Models\Payment;
use App\Models\PaymentAddress;

class PaymentFactory
{
	public static function StoreOrUpdateFromNodeTx(Object $transaction):Payment {
        /* Getting addressId */
        $address = PaymentAddress::where("address", $transaction->address)->first();
        
        $payload = [
            "amount" => $transaction->amount,
            "currency_id" => 5,
            "status" => ($transaction->confirmations > 0) ? Payment::STATUS_COMPLETED : Payment::STATUS_PENDING,
            "payment_address_id" =>  $address->id,
            "txid" =>  $transaction->txid
        ];

        return Payment::query()->updateOrCreate($payload);
	}
}
