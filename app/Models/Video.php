<?php

namespace App\Models;

use App\Traits\Makable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Video extends Model
{
    use HasFactory;
    use Makable;

    public const VIDEO_DIR = 'videos';
    public const THUMB_DIR = 'thumb';

    protected $fillable = [
        'filename',
        'filepath',
        'preview_path',
        'type',
    ];

    public function entity()
    {
        return $this->morphTo();
    }

    public static function boot()
    {
        parent::boot();

        static::deleted(function (Video $video) {
            if (Storage::disk(self::VIDEO_DIR)->exists($video->filepath)) {
                Storage::disk(self::VIDEO_DIR)->delete($video->filepath);
            }
            if (Storage::disk(self::VIDEO_DIR)->exists( self::THUMB_DIR . '/' . $video->preview_path)) {
                Storage::disk(self::VIDEO_DIR)->delete(self::THUMB_DIR . '/' . $video->preview_path);
            }
        });
    }

}
