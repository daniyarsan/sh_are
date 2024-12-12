<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class RefreshCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh database routine';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Removing storage image and video dir...');
        $storage = Storage::disk('public');
        if ($storage->exists('images')) {
            $storage->deleteDirectory('images');
        }
        if ($storage->exists('videos')) {
            $storage->deleteDirectory('videos');
        }

        $this->info('Copying files to storage dir...');
        File::copyDirectory(base_path('/storage/fixtures/images'), Storage::disk('public')->path('images'));
//        File::copyDirectory(base_path('/storage/fixtures/videos'), Storage::disk('public')->path('videos'));

        $this->info('Empty Database...');
        Artisan::call('migrate:fresh', [
            '--force' => true,
        ]);

        $this->info('Seeding...');
        Artisan::call('db:seed', [
            '--force' => true,
        ]);

        return self::SUCCESS;
    }
}
