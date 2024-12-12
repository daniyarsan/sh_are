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
        Schema::create('applications', function (Blueprint $table) {
            $table->id();

            /* Applicant data */
            $table->string('name')->nullable();
            $table->string('origin')->nullable();
            $table->string('username')->nullable();

            $table->text('story_request')->nullable();
            $table->string('story_request_path')->nullable();

            $table->string('story_title')->nullable();
            $table->text('story_brief')->nullable();

            $table->text('story_description')->nullable();

            $table->integer('invested')->nullable();
            $table->boolean('finished')->default(false);

            $table->string('avatar_path')->nullable();
            $table->foreignIdFor(\App\Models\Company::class)->constrained();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
