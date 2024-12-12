<?php

namespace App\Services;


use App\Models\Video;
use App\Traits\Makable;
use FFMpeg\Coordinate\TimeCode;
use FFMpeg\FFMpeg;
use FFMpeg\Media\Frame;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;

/**
 * Get images out of videos for automatic thumbnail generation
 */
class VideoImageGenerator
{
    use Makable;

    private FFMpeg $ffmpeg;
    private Filesystem $storage;

    public function __construct()
    {
        $this->storage = Storage::disk(Video::VIDEO_DIR);
        $this->ffmpeg = \FFMpeg\FFMpeg::create();
    }

    /**
     * @throws \Exception
     */
    public function getFrame(Video $video, $secOffset = 3): string
    {
        $video = $this->ffmpeg->open($this->storage->path($video->filepath));
        $frame = $video->frame(TimeCode::fromSeconds($secOffset));

        return $this->writeFrame($frame);
    }



    private function writeFrame(Frame $frame):string
    {
        if (!$this->storage->exists(Video::THUMB_DIR)) {
            $this->storage->makeDirectory(Video::THUMB_DIR);
        }
        $thumbName = $this->getThumbsName();

        $frame->save($this->storage->path(Video::THUMB_DIR . '/' . $thumbName));

        return $thumbName;
    }

    private function getThumbsName():string
    {
        return uniqid() . '.png';
    }

}
