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

export default function CommunityPage() {
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
            <Card className="w-64 md:w-[270px] lg:w-[330px] h-auto  ml-4">
                
              
              <div className="flex items-center justify-between space-x-4 ml-3 my-4 mr-3">
                <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/notion-avatar-1.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">6 hrs ago</p>
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
                Pom Lofi music
              </CardTitle>
              <CardDescription className="ml-3 mt-1 ">Music for asdjas asdjasds addasj asjds das dasd </CardDescription>
            </Card>
            <Card className="w-64 md:w-[270px] lg:w-[330px] h-auto  ml-4">
                
              
              <div className="flex items-center justify-between space-x-4 ml-3 my-4 mr-3">
                <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/notion-avatar-1.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">6 hrs ago</p>
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
                Pom Lofi music
              </CardTitle>
              <CardDescription className="ml-3 mt-1 ">Music for asdjas asdjasds addasj asjds das dasd </CardDescription>
            </Card>
            <Card className="w-64 lg:w-[330px] h-auto  ml-4">
                
              
              <div className="flex items-center justify-between space-x-4 ml-3 my-4 mr-3">
                <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/notion-avatar-1.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">6 hrs ago</p>
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
                Pom Lofi music
              </CardTitle>
              <CardDescription className="ml-3 mt-1 ">Music for asdjas asdjasds addasj asjds das dasd </CardDescription>
            </Card>
            <Card className="w-64 lg:w-[330px] h-auto  ml-4">
                
              
              <div className="flex items-center justify-between space-x-4 ml-3 my-4 mr-3">
                <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/notion-avatar-1.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">6 hrs ago</p>
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
                Pom Lofi music
              </CardTitle>
              <CardDescription className="ml-3 mt-1 ">Music for asdjas asdjasds addasj asjds das dasd </CardDescription>
            </Card>
            <Card className="w-64 lg:w-[330px] h-auto  ml-4">
                
              
              <div className="flex items-center justify-between space-x-4 ml-3 my-4 mr-3">
                <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/notion-avatar-1.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">6 hrs ago</p>
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
                Pom Lofi music
              </CardTitle>
              <CardDescription className="ml-3 mt-1 ">Music for asdjas asdjasds addasj asjds das dasd </CardDescription>
            </Card>
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
