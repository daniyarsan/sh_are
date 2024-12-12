<?php

namespace App\Actions;

use App\Actions\Contracts\ApplicationActionContract;
use App\Actions\DTO\ApplicationDTO;
use App\Models\Application;
use App\Models\Image;
use App\Models\Video;
use App\Services\VideoImageGenerator;

class ApplicationAction extends ApplicationActionContract
{

    public function create(ApplicationDTO $applicationDTO)
    {
        $this->_storeEntity($applicationDTO);
    }

    public function update(int $id, ApplicationDTO $applicationDTO)
    {
        $application = Application::find($id);
        if (!$application) {
            return redirect()->back()->withErrors([
                'Заявитель не найден',
            ]);
        }

        $this->_storeEntity($applicationDTO, $application);
    }

    protected function _storeEntity(ApplicationDTO $applicationDTO, Application $application = null)
    {
        $data = [
            'name' => $applicationDTO->name,
            'username' => $applicationDTO->username,
            'story_title' => $applicationDTO->story_title,
            'story_request' => $applicationDTO->story_request,
            'story_brief' => $applicationDTO->story_brief,
            'story_description' => $applicationDTO->story_description,
            'company_id' => $applicationDTO->company_id,
            'invested' => $applicationDTO->invested,
            'finished' => $applicationDTO->finished,
        ];

        if ($avatar = $applicationDTO->avatar) {
            $avatar->storeAs('public/images', $avatar->hashName());
            $data = [...$data, 'avatar_path' => $avatar->hashName()];
        }

        if ($storyImage = $applicationDTO->story_request_image) {
            $storyImage->storeAs('public/images', $storyImage->hashName());
            $data = [...$data, 'story_request_path' => $storyImage->hashName()];
        }

        if (!$application) {
            $application = Application::create($data);
        } else {
            $application->update($data);
        }

        if ($applicationDTO->video_files) {
            foreach($applicationDTO->video_files as $videoFile) {
                $video = new Video();
                $video->filename = $videoFile->getClientOriginalName();
                $video->filepath = $videoFile->hashName();
                $video->type = $videoFile->getClientOriginalExtension();
                $videoFile->storeAs('public/videos', $videoFile->hashName());
                $video->preview_path = VideoImageGenerator::make()->getFrame($video);
                $application->videos()->save($video);
            }
        }

        if ($applicationDTO->image_files) {
            foreach($applicationDTO->image_files as $imageFile) {
                $image = new Image();
                $image->filename = $imageFile->getClientOriginalName();
                $image->filepath = $imageFile->hashName();
                $image->type = $imageFile->getClientOriginalExtension();
                $imageFile->storeAs('public/images', $imageFile->hashName());

                $application->images()->save($image);
            }
        }

    }
}
