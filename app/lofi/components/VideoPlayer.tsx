"use client"
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton';
import LoaderPlayer from './LoaderPlayer';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps  {
  thumbnailSrc: string;
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({thumbnailSrc}) => {
  return (
    <ReactPlayer
      light={<img className='h-full object-cover transition-all hover:scale-105 '   src={thumbnailSrc} alt='Thumbnail'/>}
      url="https://www.youtube.com/watch?v=i43tkaTXtwI"
      fallback={<LoaderPlayer/>}
      controls
      
      playing
      
      width="330px"
      height="250px"
      
       
      
      
    />
  );
};

export default VideoPlayer;