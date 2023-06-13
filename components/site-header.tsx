"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSession, signOut } from "next-auth/react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { DropdownMenu, 
  DropdownMenuTrigger,
   DropdownMenuContent,
    DropdownMenuLabel,
     DropdownMenuSeparator,
      DropdownMenuGroup,
      DropdownMenuItem,
      
    } from "./ui/dropdown-menu"
import { LogOut, PlusCircle, User } from "lucide-react"
import { Settings } from "lucide-react"
import { useAuthStore } from "@/store/store"
import { useRouter } from "next/navigation"

export function SiteHeader() {

  const session = useSession()
  const router = useRouter();
  const { user, setUser } = useAuthStore();
  const imageUser = session.data?.user?.image
  const userName = session.data?.user?.name
  const userEmail = session.data?.user?.email


  const handleLogout = ()=>{
    user? setUser(null) : signOut()
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            
            
            <ThemeToggle />
            {session.status === "authenticated" || user  &&  (

            
            <DropdownMenu 
            >
              
              <DropdownMenuTrigger className="cursor-pointer" asChild>
              
                
              
                <Avatar>
                <AvatarImage src={imageUser || ""} />
              <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName || user.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail || user.email }
            </p>
          </div>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            
          </DropdownMenuItem>
          
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>New Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <LogOut  className="mr-2 h-4 w-4" />
          <span>Log out</span>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
            </DropdownMenu>
            ) }
           
          </nav>
        </div>
      </div>
    </header>
  )
}
