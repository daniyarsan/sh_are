<?php

namespace App\Actions\DTO;

use App\Traits\Makable;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class ApplicationDTO
{
    use Makable;

    public function __construct(
        public readonly ?string       $username,

        public readonly int           $invested,

        /* Media */
        public readonly ?string        $story_title,
        public readonly ?string        $story_request,
        public readonly ?string        $story_brief,
        public readonly ?string        $story_description,
        public readonly ?string        $company_id,

        public readonly ?UploadedFile $avatar = null,
        public readonly ?UploadedFile $preview = null,
        public readonly ?UploadedFile $story_request_image = null,

        public readonly ?string        $name = null,

        public readonly ?array         $video_files = [],
        public readonly ?array         $image_files = [],
        public readonly bool          $finished = false,
    )
    {
    }

    public static function fromRequest(Request $request)
    {
        return static::make(...$request->only([
            'name',
            'username',

            'avatar',
            'preview',
            'video_files',
            'image_files',

            'story_title',
            'story_request',
            'story_brief',
            'story_request_image',
            'story_description',
            'company_id',

            'finished',
            'invested',
            ]));
    }
}
