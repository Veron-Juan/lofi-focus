import {
    LayoutGrid,
    Library,
    ListMusic,
    Mic2,
    Music,
    Music2,
    PlayCircle,
    Radio,
    User,
  } from "lucide-react"
  
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { ScrollArea } from "@/components/ui/scroll-area"
  
  import { Playlist } from "../data/playlists"
import { Card } from "@/components/ui/card"
import { useFavoriteStore } from "@/store/store"
  
  interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: Playlist[]
  }
  
  export function Sidebar({ className, playlists }: SidebarProps) {
    
    const favorites = useFavoriteStore((state) => state.favorites);
    
    return (
      <div className={cn("pb-12", className)}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-start"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Listen Now
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Browse
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Radio
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Favorites
            </h2>


            {favorites.map((fav)=> (
                <div className="flex items-center gap-3 space-y-1 ml-2 mb-3 cursor-pointer hover:opacity-70">
                <Card >
                  <img className="rounded-md" src={fav.cover} width={42} />
                </Card>
                <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{fav.name}</h3>
          <p className="text-xs text-muted-foreground">{fav.artist}</p>
        </div>
              </div>

                ))}

            

            <div className="flex items-center gap-3 space-y-1 ml-2 mb-3">
              <Card >
                <img className="rounded-md" src="/pomodorosculpture.png" width={42} />
              </Card>
              <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none"> Lofi studyngs</h3>
        <p className="text-xs text-muted-foreground">asdasda</p>
      </div>
            </div>
            
            {/* <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <ListMusic className="mr-2 h-4 w-4" />
                Playlists
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Music2 className="mr-2 h-4 w-4" />
                Songs
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Made for You
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Mic2 className="mr-2 h-4 w-4" />
                Artists
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Library className="mr-2 h-4 w-4" />
                Albums
              </Button>
            </div> */}
          </div>
          
        </div>
      </div>
    )
  }