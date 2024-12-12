<?php

namespace App\Actions;

use App\Actions\Contracts\ApplicationActionContract;
use App\Actions\DTO\ApplicationDTO;
use App\Actions\DTO\ProjectDTO;
use App\Models\Application;
use App\Models\Image;
use App\Models\Project;
use App\Models\Video;
use App\Services\VideoImageGenerator;

class ProjectAction extends ApplicationActionContract
{

    public function create(ProjectDTO $dto)
    {
        $this->_storeEntity($dto);
    }

    public function update(int $id, ProjectDTO $DTO)
    {
        $entity = Project::find($id);

        if (!$entity) {
            return redirect()->back()->withErrors([
                'Проект не найден',
            ]);
        }

        $this->_storeEntity($DTO, $entity);
    }

    protected function _storeEntity(ProjectDTO $DTO, Project $entity = null): Project
    {
        $data = [
            'name' => $DTO->name,
            'cost' => $DTO->cost,
            'target_votes' => $DTO->target_votes,
            'content' => $DTO->content,
            'finished' => $DTO->finished,
            'custom_url' => $DTO->custom_url,
            'new' => $DTO->finished ? false : true,
            'industry_id' => $DTO->industry_id,
        ];

        if ($avatar = $DTO->image) {
            $avatar->storeAs('public/images', $avatar->hashName());
            $data = [...$data, 'image_path' => $avatar->hashName()];
        }

        if ($storyImage = $DTO->mobile_image) {
            $storyImage->storeAs('public/images', $storyImage->hashName());
            $data = [...$data, 'mobile_image_path' => $storyImage->hashName()];
        }

        if (!$entity) {
            $entity = Application::create($data);
        }

        $entity->update($data);

        return $entity;
    }
}
