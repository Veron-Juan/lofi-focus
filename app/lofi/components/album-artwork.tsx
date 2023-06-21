"use client"
import Image from "next/image"
import { ListMusic, PlusCircle, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Album } from "../data/albums"
import { playlists } from "../data/playlists"
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { useFavoriteStore } from "@/store/store"

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

interface CardProps {
  album: Album;
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {

  const [isStarClicked, setIsStarClicked] = useState(false);
  const { addFavorite } = useFavoriteStore();
  const favorites = useFavoriteStore ((state) => state.favorites);
  const setFavorites = useFavoriteStore((state) => state.setFavorites);
  const isFavorite = favorites.some((favorite) => favorite.name === album.name);

  const handleStarClick = () => {

    if (isFavorite) {
      const updatedFavorites = favorites.filter((favorite) => favorite.name !== album.name);
      setFavorites(updatedFavorites);
      setIsStarClicked(!isStarClicked);
      console.log('Elemento eliminado de favoritos:', album);
    } else{
      setIsStarClicked(!isStarClicked);
    addFavorite(album);
    console.log("se agrego este", album)

    }

    
  };

  const divClassName = `absolute right-0 bottom-2 cursor-pointer  hover:text-fuchsia-800  ${
    isStarClicked ? "text-fuchsia-700" : ""
  }`;

  
  

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md cursor-pointer relative ">
            
            <VideoPlayer
            
            thumbnailSrc={album.cover}
            
            
            />
            
            
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm relative">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
        <div className={divClassName}  >
              <Star width={20} onClick={handleStarClick}  />
            </div>
      </div>
    </div>
  )
}