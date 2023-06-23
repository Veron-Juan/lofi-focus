"use client"

import { Metadata } from "next"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"
import "./styles.css"

import { PlusCircle } from "lucide-react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { CardMenu } from "./components/CardMenu"
import VideoPlayer from "./components/VideoPlayer"
import "swiper/css"
import Link from "next/link"
import { useFavoriteStore } from "@/store/store"

import LoaderPlayer from "./components/LoaderPlayer"
import { MouseEventHandler, useState } from "react"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  

  const favorites = useFavoriteStore((state) => state.favorites);

  const [selectFav, setSelectFav] = useState("")
  const [selectImgFav, setselectImgFav] = useState("")

  const handleFav = (url:string, image:string) => {
    setSelectFav(url)
    setselectImgFav(image)
  }

  return (
    <>
      <div className="">
        
        <div className="border-t  ">
          <div className="bg-background max-w-[1470px]">
            <div className="grid grid-cols-2 lg:grid-cols-5  ">
              <Sidebar playlists={playlists} className="hidden  lg:block" />
              <div className=" col-span-3 lg:col-span-4 lg:border-l  ">
                <div className="h-full px-4 py-6 lg:px-8 ">
                  <Tabs defaultValue="music" className="h-full space-y-6  ">
                    <div className="flex justify-between   relative ">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Pomodoro</TabsTrigger>

                        <TabsTrigger value="favorites">Favorites</TabsTrigger>
                      </TabsList>
                      <div className="">
                        <Button className="">
                          <PlusCircle className="mr-2  h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>

                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4 ">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>

                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Relax and Study
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <CardMenu
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>

                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Community
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <CardMenu
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated dailyyyy.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>

                    <TabsContent
                      value="favorites"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Favorites
                          </h2>
                          <p className="text-sm text-muted-foreground">
                          Here you can listen to your favorite lists.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />

                      <div className="flex h-auto shrink-0 items-center  justify-center rounded-md border border-dashed  ">
                        <div className=" overflow-auto ">
                          <div className="my-5 flex justify-center">
                            {favorites.length === 0 && 
                            <div className="flex flex-col">
                            <h3 className="mt-4 text-lg font-semibold text-center">No favorites added</h3>
                            <p className="mb-4 mt-2 text-sm text-muted-foreground">
                              You have not added any favorite. 
                            </p>
                            </div>
                            }
                            {!selectFav || favorites.length === 0  ? null :  
                            <VideoPlayer
                            url={selectFav}
                            thumbnailSrc={selectImgFav}
                            />
                          }
                          </div>
                              
                          <div className="relative">
                            <ScrollArea>
                              <div className="flex space-x-4 pb-4">
                                {favorites.map((fav) => (
                                  <CardMenu
                                    key={fav.cover}
                                    
                                    album={fav}
                                    className="w-[150px]"
                                    aspectRatio="square"
                                    width={150}
                                    height={150}
                                    onClick={() => handleFav(fav.url, fav.cover )}
                                  />
                                ))}
                                
                              </div>
                              <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                          </div>
                          

                          {/* <h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          You have not added any podcasts. Add one below.
        </p>
        <Button>Add favorites</Button> */}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
