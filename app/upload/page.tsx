"use client"

import axios from "axios";
import { FormEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useSession } from 'next-auth/react';

import { useRouter } from "next/navigation";
import { Toaster, toast  } from "sonner"


export default function page() {

    const session = useSession();

    const router = useRouter();

    // if (session.status === "loading") {
    //     return <p>Loading...</p>;
    //   }
    
    //   if (session.status === "unauthenticated") {
    //     router?.push("/login");
    //   }

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        try {
          const formData = new FormData(event.currentTarget);
          const response = await axios.post('/api/posts', {
            link: formData.get("link"),
            title: formData.get("title"),
            description: formData.get("description"),
            avatar: session.data?.user?.image,
            username:session.data?.user?.name,
          });
          console.log(response);
          if (response.status == 200 || 2001){
            toast.success('Post successfully uploaded')
            return router.push("/community");
          } 
          // Maneja la respuesta como desees
        } catch (error) {
          console.error(error);
          // Maneja el error como desees
        }
      };
    

        return (
            <>
            
            <Toaster duration={1500}  />
            <form onSubmit={handleSubmit} >
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="link">Video URL</Label>
                <Input id="link" name="link" placeholder="https://example.com/feed.xml" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Title">Title</Label>
                <Input id="title" name="title" placeholder="Lofi Example" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" placeholder="description example" />
              </div>
            </div>
            <DialogFooter>
              <Button>Import Music</Button>
            </DialogFooter>
            </form>
         
          
            </>
          )
     

  
}
