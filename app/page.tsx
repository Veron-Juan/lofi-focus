

import Image from "next/image"
import Link from "next/link"
import { Music, PlusCircle, TimerReset, Users } from "lucide-react"


import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth";

import {ContainerSlice, ContainerSliceRight }from "@/components/ContainerSlice"

export default async function IndexPage() {
  
  const session = await getServerSession();
  
  

  return (
    <div className="overflow-x-hidden">
      <section className="flex justify-center md:items-center   max-w-7xl mx-auto mt-16 flex-col items-center px-7    ">
        
      <h1 className="text-3xl text-center md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter   text-black dark:text-white ">
          Your space for relaxation and concentration 
          </h1>


        



        <div className="md:flex items-center  overflow-x-hidden  ">

          
          
        <div className="flex md:flex-1 md:mb-[40px] max-w-[900px] flex-col   ">
          
          {/* <h2 className=" my-3  leading-tight tracking-tighter md:text-4xl text-2xl  text-black dark:text-white">
            Your space for relaxation and concentration.{" "}
          </h2> */}
          <p className=" md:text-lg text-[16px] max-w-[600px] text-muted-foreground">
            On our
            website, you can find a wide variety of lofi music, share your
            favorite songs with other users and discover new artists and songs
            in the community.
          </p>
          <div className="flex gap-6 my-8">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Get Started
            </Link>
            {!session ? <Link
              href="/login"
              className={buttonVariants({ variant: "outline", size: "default" })}
            >
              Login
            </Link> : 
              <div className="">
              <Link href="community" className={buttonVariants({ variant: "outline", size: "default" })}>
                <PlusCircle className="mr-2  h-4 w-4" />
                Add music
              </Link>
            </div>
            }
            
          </div>
        </div>
        <div className="hidden md:block justify-start   mt-4">
          <Image
            className=" w-[220px] h-[220px]  md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] "
            src="/hero.png"
            alt="hero"
            width={220}
            height={220}
          />
        </div>

        </div>

        



<div className="flex  gap-6   mt-12 md:mt-6  ">
        <Card className=" w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60 ">
          
            <CardTitle className="flex items-center gap-2 flex-col text-md ">
              <Music strokeWidth={2.5} />
              Lofi Music
            </CardTitle>
          
        </Card>
        <Card className=" w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60">
          
            <CardTitle className="flex items-center gap-2 flex-col text-md ">
              <TimerReset strokeWidth={2.5} />
              Pomodoro 
            </CardTitle>
            
          
        </Card>
        <Card className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60">
          
            <CardTitle className="flex items-center gap-2 flex-col text-md">
              <Users strokeWidth={2.5} />
              Community
            </CardTitle>
          
        </Card>
      </div>
      

      </section>
      
      {/* <div className="max-w-[1000px]  flex justify-between items-start mt-2 gap-24 xs:gap-7 xs:flex-col xs:items-center" > */}

        <ContainerSlice>
      <div className=" flex flex-col  items-center md:justify-center md:flex-row md:mb-40 md:px-6 mt-20  gap-6">
        <Image
          src="/sculpturemusicbg.webp"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl sm:w-[380px] sm:h-[365px]  "
          width={315}
          height={315}
        />
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 ml-6 text-black dark:text-white text-4xl font-extrabold tracking-tight md:text-start md:ml-4 lg:text-5xl  ">
            Lofi Music
          </h3>
          <p className="text-justify px-7 md:px-4">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px] ml-6 md:text-start md:ml-3">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
      </div>
      </ContainerSlice>




        <ContainerSliceRight>
      <div className="flex  mt-20 gap-7  flex-col-reverse items-center md:justify-center md:flex-row md:mb-40   md:px-6  ">
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 ml-6 text-4xl text-black dark:text-white font-extrabold tracking-tight md:text-5xl ">
            Pomodoro Tecnique
          </h3>

          <p className="text-justify px-7 md:px-4">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px] ml-6 md:text-start md:ml-3">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
        <Image
          src="/pomodorosculpture.webp"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl sm:w-[380px] sm:h-[365px]  "
          width={315}
          height={315}
        />
      </div>
      </ContainerSliceRight>

        <ContainerSlice>
      <div className=" flex flex-col  items-center md:justify-center md:flex-row  md:px-6 md:mb-40  mt-20 gap-6">
        <Image
          src="/community.webp"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl sm:w-[380px] sm:h-[365px]  "
          width={315}
          height={315}
        />
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 ml-6 text-4xl text-black dark:text-white font-extrabold tracking-tight md:text-start md:ml-4 lg:text-5xl  ">
            Community
          </h3>
          <p className="text-justify px-7 md:px-4">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px] ml-6 md:text-start md:ml-3">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
      </div>
      </ContainerSlice>
    </div>
  )
}
