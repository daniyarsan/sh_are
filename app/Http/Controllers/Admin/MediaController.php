<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Video;
use App\Services\VideoImageGenerator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{

    public function videoPreviewUpload(int $id, Request $request)
    {
        $video = Video::find($id);
        if (!$video) {
            return redirect()->back()->withErrors([
                'Видео не найдено',
            ]);
        }

        $request->validate([
            'preview' => 'mimes:png,jpg,jpeg',
        ]);

        $preview = $request->preview;

        if ($preview) {
            $request->preview->storeAs('public/videos/thumb', $preview->hashName());
            $video->preview_path = $preview->hashName();
            $video->save();
        }

        return redirect()->back()->withSuccess('Превью добавлено успешно');

    }

    public function videoPreviewDestroy(string $id)
    {
        $video = Video::find($id);

        if (!$video) {
            return redirect()->back()->withErrors([
                'Видео файл не найден',
            ]);
        }

        if (Storage::disk(Video::VIDEO_DIR)->exists( Video::THUMB_DIR . '/' . $video->preview_path)) {
            Storage::disk(Video::VIDEO_DIR)->delete(Video::THUMB_DIR . '/' . $video->preview_path);
        }


        $video->preview_path = null;
        $video->save();

        return redirect()->back()->withSuccess('Превью удалено успешно');
    }

    public function videoDestroy(string $id)
    {
        $video = Video::find($id);

        if (!$video) {
            return redirect()->back()->withErrors([
                'Видео файл не найден',
            ]);
        }

        $video->delete();

        return redirect()->back()->withSuccess('Видео файл удален успешно');
    }

    public function videoGenerateThumb(string $id)
    {
        $video = Video::find($id);

        if (!$video) {
            return redirect()->back()->withErrors([
                'Видео файл не найден',
            ]);
        }

        $video->preview_path = VideoImageGenerator::make()->getFrame($video);
        $video->save();

        return redirect()->back()->withSuccess('Сгенерировано успешно');
    }

    public function imageDestroy(string $id)
    {
        $image = Image::find($id);

        if (!$image) {
            return redirect()->back()->withErrors([
                'Файл не найден',
            ]);
        }

        $image->delete();

        return redirect()->back()->withSuccess('Файл удален успешно');
    }
}
