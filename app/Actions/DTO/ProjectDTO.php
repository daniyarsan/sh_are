<?php

namespace App\Actions\DTO;

use App\Traits\Makable;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class ProjectDTO
{
    use Makable;

    public function __construct(
        public readonly ?string       $name,
        public readonly ?string       $cost,
        public readonly ?string       $target_votes,
        public readonly ?string       $custom_url,
        public readonly ?string       $content,
        public readonly int           $industry_id,
        public readonly bool          $finished = false,

        public readonly ?UploadedFile $image = null,
        public readonly ?UploadedFile $mobile_image = null,

    )
    {
    }

    public static function fromRequest(Request $request)
    {
        return static::make(...$request->only(['name', 'cost', 'target_votes', 'custom_url', 'content', 'finished', 'image', 'mobile_image', 'industry_id']));
    }
}
