"use client"
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton';
import LoaderPlayer from './LoaderPlayer';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps  {
  thumbnailSrc: string;
  url:string;
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({thumbnailSrc, url}) => {
  return (
    <ReactPlayer
      light={<img className='h-full object-cover transition-all hover:scale-105 rounded-lg '   src={thumbnailSrc} alt='Thumbnail'/>}
      url={url}
      fallback={<LoaderPlayer/>}
      controls
      
      playing
      
      width="250px"
      height="250px"
      
       
      
      
    />
  );
};

export default VideoPlayer;