<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class ThumbnailController extends Controller
{
    public function videoThumb(
        string $dir,
        string $method,
        string $size,
        string $file
    ): BinaryFileResponse
    {
        abort_if(!in_array($size, config('thumbnail.allowed_size', [])), 403, 'Size not allowed');

        $storage = Storage::disk('videos');

        $realPath = Video::THUMB_DIR . "/$file";
        $newDirPath = Video::THUMB_DIR . "/$method/$size";
        $resultPath = "$newDirPath/$file";

        if (!$storage->exists($newDirPath)) {
            $storage->makeDirectory($newDirPath);
        }

        if (!$storage->exists($resultPath)) {
            $manager = new ImageManager(new Driver());
            $image = $manager->read($storage->path($realPath));
            [$w, $h] = explode('x', $size);
            $image->{$method}(width: $w, height: $h);

            $image->toPng()->save($storage->path($resultPath));
        }

        return response()->file($storage->path($resultPath));
    }

}
