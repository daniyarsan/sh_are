import React, { useContext, useEffect, useRef, useState } from 'react';
import PlayIcon from '@/components/_elements/icons/PlayIcon';
import clsx from 'clsx';
import { ParamsContext } from '@/contexts/ParamsProvider';
import Progressbar from '@/components/video/Progressbar';

type VideoProps = {
  url: string;
  autoplay?: boolean;
};

export default function VideoPlayer({ url, autoplay = false }: VideoProps) {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error('ParamsContext must be used within a ParamsProvider');
  }
  const { setLoading } = context;

  const videoElement = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<
    HTMLVideoElement | undefined
  >();
  const [timer, setTimer] = useState<string>('');
  const [percentage, setPercentage] = useState<number>(0);

  const playOrPause = () => {
    if (!videoElement.current) return;

    if (videoElement.current.paused) {
      videoElement.current.play();
    } else {
      videoElement.current.pause();
    }
  };

  useEffect(() => {
    setLoading(true);

    if (autoplay) {
      playOrPause();
    }

    const togglePlay = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        playOrPause();
      }
    };

    window.addEventListener('keydown', togglePlay);

    return () => {
      window.removeEventListener('keydown', togglePlay);
    };
  }, [autoplay]);

  return (
    <div className='relative flex justify-center'>
      <video
        onLoadedData={() => {
          setLoading(false);
          if (videoElement.current) {
            setCurrentVideo(videoElement.current);
          }
        }}
        ref={videoElement}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          if (!videoElement.current) return;

          const current = videoElement.current.currentTime;
          const duration = videoElement.current.duration;

          const currentMinutes = Math.floor(current / 60);
          const currentSeconds = Math.floor(current % 60);

          const durationMinutes = Math.floor(duration / 60);
          const durationSeconds = Math.floor(duration % 60);

          setTimer(
            `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}/${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`,
          );
          setPercentage((current / duration) * 100);
        }}
        preload='auto'
        playsInline
        onClick={playOrPause}
        className='rounded-2xl max-h-[90vh] z-50'>
        <source src={url} type='video/mp4' />
        {/* Add other sources or tracks if needed */}
      </video>

      {currentVideo && <Progressbar timer={timer} percentage={percentage} />}

      <div
        className={clsx({
          hidden: isPlaying,
          'absolute-center z-50': !isPlaying,
        })}
        onClick={playOrPause}>
        <PlayIcon className='fill-light-800 mx-auto size-[40%] cursor-pointer drop-shadow-4xl opacity-90' />
      </div>
    </div>
  );
}
