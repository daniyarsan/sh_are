<?php

namespace App\Traits\Model;

use Illuminate\Support\Facades\File;

trait HasThumbnail
{

    public abstract function getThumbnailDir();

    public function makeThumbnail(string $size, string $method = "resize"):string
    {
        return route('thumbnail', [
            'size' => $size,
            'dir' => $this->getThumbnailDir(),
            'method' => $method,
            'file' => File::basename($this->{$this->getThumbnailProperty()})
        ]);
    }

    public function getThumbnailProperty()
    {
        return 'thumb';
    }
}
