<?php

namespace Database\Seeders;

use App\Models\Industry;
use App\Models\User;
use Database\Factories\ApplicationFactory;
use Database\Factories\CategoryFactory;
use Database\Factories\IndustryFactory;
use Database\Factories\ProjectFactory;
use Database\Factories\VoteFactory;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projectData = $this->getProjectsArray();
        $votes = VoteFactory::new()->count(29);


        foreach ($projectData as $item) {
            $industry = Industry::query()->where(['name' => $item['industry']])->first();
            ProjectFactory::new()->has($votes)->create([
                ...$item['data'], 'industry_id' => $industry->id
            ]);
        }
    }

    public function getProjectsArray()
    {
        return [
            [
                'industry' => 'Social',
                'data' => [
                    'finished' => false,
                    'featured' => true,
                    'cost' => 5000000,
                    'target_votes' => 150,
                    'new' => true,
                    'name' => 'Support for Underprivileged Families',
                    'content' => '<p class="text-md font-medium md:text-lg">
          Providing essential food packages, medical assistance, and financial support to families in dire need.
        </p>
        <div class="mt-10 space-y-7">
          <h3>Why Support Families?</h3>
          <p>
            Many families face economic challenges due to job loss, inflation, or medical expenses. Our project aims 
            to provide immediate support and a chance for stability to ensure no family suffers alone.
          </p>
          <div class="flex flex-row space-x-4">
            <img src="/storage/images/family-support.png" alt="Support Families" />
            <div class="flex flex-col justify-center">
              <span class="text-lg font-medium">Families in Crisis</span>
              <span>Helping those who need it the most</span>
            </div>
          </div>
        </div>',
                ],
            ],
            [
                'industry' => 'Social',
                'data' => [
                    'slug' => 'social2',
                    'finished' => false,
                    'featured' => false,
                    'cost' => 3500000,
                    'target_votes' => 150,
                    'new' => false,
                    'name' => 'Animal Shelter Construction',
                    'content' => '<p class="text-md font-medium md:text-lg">
          Building a safe and loving shelter to protect stray animals and promote responsible adoption.
        </p>
        <div class="mt-10 space-y-7">
          <h3>Why Build a Shelter?</h3>
          <p>
            Stray animals are often neglected and mistreated. By constructing shelters, we provide proper care 
            and a chance for these animals to find new homes.
          </p>
          <div class="flex flex-row justify-around">
            <img src="/storage/images/stray-dogs.png" alt="Shelter Construction" />
            <img src="/storage/images/stray-cats.png" alt="Shelter Care" />
          </div>
        </div>',
                ],
            ],

            [
                'industry' => 'Organizations',
                'data' => [
                    'finished' => false,
                    'featured' => false,
                    'cost' => 8000000,
                    'target_votes' => 150,
                    'new' => true,
                    'name' => 'Orphanage Library Renovation',
                    'content' => '<p class="text-md font-medium md:text-lg">
          Renovating libraries in orphanages to provide educational resources and inspire young minds.
        </p>
        <div class="mt-10 space-y-7">
          <h3>Empowering Children</h3>
          <p>
            Education is a tool for a better future. Upgrading orphanage libraries ensures children have access 
            to learning materials and digital resources.
          </p>
          <div class="flex flex-row space-x-4">
            <img src="/storage/images/orphanage-library.png" alt="Library for Kids" />
            <div class="flex flex-col justify-center">
              <span class="text-lg font-medium">A Brighter Future</span>
              <span>Inspiring education for orphans</span>
            </div>
          </div>
        </div>',
                ],
            ],
            [
                'industry' => 'Organizations',
                'data' => [
                    'finished' => false,
                    'featured' => true,
                    'cost' => 2000000,
                    'target_votes' => 150,
                    'new' => false,
                    'name' => 'Retirement Home Gardening Project',
                    'content' => '<p class="text-md font-medium md:text-lg">
          Creating therapeutic gardens in retirement homes to promote relaxation and health for senior citizens.
        </p>
        <div class="mt-10 space-y-7">
          <h3>Therapy Through Nature</h3>
          <p>
            Gardening has proven physical and mental health benefits for the elderly, offering joy and a sense of 
            purpose in their daily lives.
          </p>
          <div class="flex flex-row justify-around">
            <img src="/storage/images/elder-garden1.png" alt="Gardening Activities" />
            <img src="/storage/images/elder-garden2.png" alt="Retirement Therapy" />
          </div>
        </div>',
                ],
            ],


            [
                'industry' => 'Cultural',
                'data' => [
                    'finished' => false,
                    'featured' => true,
                    'cost' => 6000000,
                    'target_votes' => 150,
                    'new' => true,
                    'name' => 'Support Emerging Artists',
                    'content' => '<p class="text-md font-medium md:text-lg">
          Providing grants and mentorship programs to help emerging visual artists create and showcase their work.
        </p>
        <div class="mt-10 space-y-7">
          <h3>Fostering Creativity</h3>
          <p>
            Many artists struggle due to lack of funds and exposure. This project helps talented individuals
            unleash their creativity and enrich culture.
          </p>
          <div class="flex flex-row justify-center">
            <img src="/storage/images/artist-at-work.png" alt="Emerging Artists" />
          </div>
        </div>',
                ],
            ],
            [
                'industry' => 'Cultural',
                'data' => [
                    'finished' => true,
                    'featured' => false,
                    'cost' => 4500000,
                    'target_votes' => 150,
                    'new' => false,
                    'name' => 'Sculpture Park Restoration',
                    'content' => '<p class="text-md font-medium md:text-lg">
          Restoring public sculpture parks to preserve cultural heritage and provide spaces for art appreciation.
        </p>
        <div class="mt-10 space-y-7">
          <h3>Reviving Public Spaces</h3>
          <p>
            Public parks often deteriorate without proper maintenance. This project brings art and beauty 
            back to life for communities to enjoy.
          </p>
          <div class="flex flex-row justify-center">
            <img src="/storage/images/sculpture-park.png" alt="Sculpture Restoration" />
          </div>
        </div>',
                ],
            ],
        ];
    }

}



