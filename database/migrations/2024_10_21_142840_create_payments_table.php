<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('typeId')->nullable()->default(null);
            $table->string('amount', 128)->nullable()->default(null);
            $table->string('txid', 128)->nullable()->default(null);
            $table->enum('status', ['new', 'pending', 'completed', 'canceled',])->default('new');
            $table->foreignIdFor(\App\Models\PaymentAddress::class)->constrained();
            $table->foreignIdFor(\App\Models\Currency::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
