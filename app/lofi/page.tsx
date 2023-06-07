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
import Image from "next/image"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoPlayer from "./components/VideoPlayer"
import { Skeleton } from "@/components/ui/skeleton"
import { CardMenu } from "./components/CardMenu"

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  const breakpoints = {
    // Configuración para pantallas mayores o iguales a 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Configuración para pantallas mayores o iguales a 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
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
                        
                        <TabsTrigger value="live" >
                          Community
                        </TabsTrigger>
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
                      {/* <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[230px]  "
                                aspectRatio="portrait"
                                width={200}
                                height={100}
                                
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div> */}
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
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
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
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