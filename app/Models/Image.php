<?php

namespace App\Models;

use App\Traits\Makable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    use HasFactory;
    use Makable;

    public const IMAGE_DIR = 'images';

    protected $fillable = [
        'filename',
        'filepath',
        'type',
    ];

    public function entity()
    {
        return $this->morphTo();
    }

    public static function boot()
    {
        parent::boot();

        static::deleted(function (Image $image) {
            if (Storage::disk(self::IMAGE_DIR)->exists($image->filepath)) {
                Storage::disk(self::IMAGE_DIR)->delete($image->filepath);
            }
        });
    }

}
