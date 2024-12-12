import React from 'react';
import VideoPlayer from '@/components/video/VideoPlayer';
import { Video } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function VideoPreview({ video }: { video: Video }) {
  return (
    <div className='relative h-[200px]'>
      {video.preview_path && (
        <img
          className='h-full w-full object-cover rounded-2xl'
          src={`/storage/videos/thumb/${video.preview_path}`}
        />
      )}

      <Dialog>
        <DialogTrigger>
          <span className='absolute-center z-10 size-25 bg-dark-900 opacity-80 hover:opacity-100 rounded-full flex justify-center items-center p-5 cursor-pointer'>
            <img src={`/assets/icons/play.svg`} alt='' className='w-5' />
          </span>
        </DialogTrigger>

        <DialogContent className='md:max-w-fit border-0 shadow-none'>
          <DialogHeader>
            <DialogTitle className='hidden'>Настройки</DialogTitle>
            <DialogDescription className='hidden'></DialogDescription>
          </DialogHeader>
          <VideoPlayer
            url={`/storage/videos/${video.filepath}`}
            autoplay={true}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
