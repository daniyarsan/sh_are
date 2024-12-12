import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import BackButton from '@/components/_elements/BackButton';
import IntroText from '@/components/_elements/IntroText';
import Note from '@/components/_elements/Note';
import React from 'react';

export default function Home() {
  return (
      <MainLayout>
        <Head title='How It Works' />

        <section className='px-5'>
          <div className='mb-10 mt-5 md:mx-auto md:mb-10 md:w-9/12'>
            <BackButton className='mb-10 block cursor-pointer text-gray-500'>{`< Back`}</BackButton>
            <h1>How It Works?</h1>
          </div>


          <div className='space-y-[3em] md:m-auto md:w-9/12'>
            <IntroText>
              Our platform connects individuals and organizations with impactful
              projects. Whether you're supporting a cause, helping a dream come true,
              or driving change in your community, your contribution makes a
              difference. We give everyone the power to fund projects that matter.
            </IntroText>

            <h3>How does it work?</h3>

            <p>
              Through socially responsible funding – you get to choose where your
              contributions go. You can support projects that align with your values,
              knowing that the funds raised are spent to create positive change in
              areas like healthcare, education, and sustainability.
            </p>


            <h3>How to choose the right projects?</h3>

            <p className='text-md'>
              It's simple: the projects that make a difference are those that
              demonstrate transparency and commitment. You can find such projects on our
              platform, where we ensure that every donation is used effectively.
              We encourage you to support only those that make a real impact.
            </p>

            <Note>
              All projects on our platform are verified and follow ethical guidelines,
              ensuring that every contribution counts towards meaningful progress.
            </Note>

            <p>
              You can track the progress of the projects in real-time, read reports on
              completed initiatives, and vote for future projects that need support.
            </p>

            <h3>
              The power is in your hands.
            </h3>

            <p>
              This approach creates a unique ecosystem where individuals, businesses, and
              research communities collaborate to achieve a common goal—supporting projects
              that improve the quality of life and help protect the environment. By supporting
              these initiatives, you are making a difference and contributing to a brighter future.
            </p>

          </div>
        </section>
      </MainLayout>
  );
}