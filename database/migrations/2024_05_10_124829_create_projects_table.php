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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');

            $table->text('content');

            $table->bigInteger('cost');
            $table->boolean('finished')->default(false);
            $table->boolean('featured')->default(false);
            $table->boolean('new')->default(true);

            $table->bigInteger('target_votes');
            $table->string('custom_url')->nullable();

            $table->string('mobile_image_path')->nullable()->default('NULL');
            $table->string('image_path')->nullable()->default('NULL');

            $table->foreignIdFor(\App\Models\Industry::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
