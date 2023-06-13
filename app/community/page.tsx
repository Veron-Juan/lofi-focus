"use client"

import { Metadata } from "next"
import { PlusCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CardMenu } from "../lofi/components/CardMenu"
import VideoPlayer from "../lofi/components/VideoPlayer"
import { AlbumArtwork } from "../lofi/components/album-artwork"
import { madeForYouAlbums } from "../lofi/data/albums"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect } from "react"









export default async function CommunityPage() {

  async function getData() {
    const res = await fetch("http://localhost:3000/api/posts") 
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    
    return res.json();
  
  }



  const data = await getData();
  

  

  
  

  return (
    <div className="border-t   ">
      <div className="bg-background   ">
        <div className=" max-w-[1300px] mx-auto ">
         
          <div className=" col-span-3 lg:col-span-4   ">
            <div className="h-full px-4 py-6 lg:px-8 ">
              <Tabs defaultValue="music" className="h-full space-y-6  ">
                <div className="flex justify-between   relative ">
                  <h1 className="text-3xl text-center md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter   text-black dark:text-white">
                    Welcome our Community
                  </h1>

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
                
                  <div className="flex flex-wrap my-9 justify-center">
                  {data?.map((i:any)=> {
                  return(
                    <Card className="w-64 md:w-[270px] lg:w-[330px] h-auto  ml-4">
                
              
              <div className="flex items-center justify-between space-x-4 ml-3 my-4 mr-3">
                <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={i.avatar} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm font-medium leading-none">{i.username}</p>
              <p className="text-sm text-muted-foreground">
  {(() => {
    const createdAt = new Date(i.createdAt);
    const fechaActual = new Date();

    const diferenciaMilisegundos = fechaActual.getTime() - createdAt.getTime();
    const minutosTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60));
    const horasTranscurridas = Math.floor(minutosTranscurridos / 60);

    if (minutosTranscurridos < 60) {
      return `${minutosTranscurridos} min`;
    } else {
      return `${horasTranscurridas} h`;
    }
  })()}
</p>
            </div>
            </div>
          <Star  />
          </div>
              <div className="flex justify-center ">
              <VideoPlayer 
              thumbnailSrc="https://e1.pxfuel.com/desktop-wallpaper/182/494/desktop-wallpaper-pink-lofi-lo.jpg"
              />
              </div>
              <CardTitle className="ml-3 mt-3  " >
                {i.title}
              </CardTitle>
              <CardDescription className="ml-3 mt-1 ">{i.description} </CardDescription>
            </Card>
                  )
                })}
          
            
            
            
            
          </div>



                 

                  
                  <Separator className="my-4" />
                  
                   
                 
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
