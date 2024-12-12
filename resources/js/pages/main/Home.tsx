import MainLayout from '@/layouts/MainLayout';
import Jumbotron from '@/components/_elements/Jumbotron';
import Rating from '@/components/rating/Rating';
import CallToAction from '@/components/calls/CallToAction';
import ProjectCard from '@/components/projectCard/ProjectCard';
import VoteCard from '@/components/vote/VoteCard';
import { Head } from '@inertiajs/react';
import IndustryBlock from '@/components/IndustryBlock';
import FeaturedCard from '@/components/projectCard/FeaturedCard';
import { Company, Industry, Project } from '@/types';
import React from 'react';
import main from '../../../../resources/images/main.svg'

type Props = {
  companies: Company[];
  featuredProject: Project;
  finishedProject: Project;
  currentProjects: Project[];
  newProjects: Project[];
  industries: Industry[];
};

export default function Home({
  companies,
  featuredProject,
  finishedProject,
  currentProjects,
  newProjects,
  industries,
}: Props) {
  return (
    <MainLayout>
      <Head title='Главная' />

      <section className='space-y-[6em] py-10'>
        <div className='flex flex-col items-center justify-around md:flex-row md:justify-center'>
          <div className='w-full px-5 md:w-6/12 md:pr-10'>
            <Jumbotron
              title='Sh_are'
              description="We connect passionate individuals and organizations to bring impactful projects to life. Whether you're raising funds for a cause, supporting a dream, or driving change in your community, every contribution counts"
            />
          </div>

          <div className='w-full overflow-hidden md:w-6/12'>
            <img src={main} />
          </div>
        </div>

        <div className='space-y-[6em] px-5'>
          <div className=''>
            <h1 className='pb-10'>Done:</h1>

            <div className='flex flex-col gap-5'>
              <FeaturedCard project={featuredProject} />
              <FeaturedCard project={finishedProject} />
            </div>
          </div>

          <div className='w-full md:w-9/12'>
            <Jumbotron
                title='Make Your Impact: Vote for the Next Project to Join the Queue'
                description='Voting will automatically close once the current project reaches its fundraising goal.'
            />
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
            {newProjects.map((project: Project) => {
              return <VoteCard key={project.id} project={project} />;
            })}
          </div>

          {currentProjects.length > 0 && (
            <>
              <div className='w-full md:w-9/12'>
                <Jumbotron
                    title='Charity Crowdfunding Projects'
                    description="We connect passionate individuals and organizations to bring impactful projects to life. Whether you\'re raising funds for a cause, supporting a dream, or driving change in your community, every contribution counts."
                />
              </div>
              <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
                {currentProjects.map((project: Project) => {
                  return <ProjectCard key={project.id} project={project} />;
                })}
              </div>
            </>
          )}

          <Rating companies={companies} />

          <CallToAction
              text='Join us in supporting impactful projects. Contribute.'
              href={route('investment.index')}
              buttonText={'Support'}
          />

          <IndustryBlock industries={industries} />
        </div>
      </section>
    </MainLayout>
  );
}
