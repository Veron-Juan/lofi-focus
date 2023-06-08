"use client"

import Image from "next/image"
import Link from "next/link"
import { Music, TimerReset, Users } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <>
      <section className="flex justify-center md:items-center  max-w-7xl mx-auto mt-16 flex-col items-center px-7   ">
      <h1 className="text-3xl text-center md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter   text-black dark:text-white ">
          Your space for relaxation and concentration
          </h1>


        



        <div className="md:flex items-center  ">

          
          
        <div className="flex md:flex-1 md:mb-[40px] max-w-[900px] flex-col  ">
          
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
            <Link
              href="/"
              className={buttonVariants({ variant: "outline", size: "default" })}
            >
              Login
            </Link>
          </div>
        </div>
        <div className="hidden md:block justify-start   mt-4">
          <img
            className=" w-[220px] h-[220px]  md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] "
            src="/hero.png"
            alt="hero"
          />
        </div>

        </div>

        



<div className="flex  gap-6   mt-12 md:mt-6 ">
        <Card className=" w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 xs:flex-col xs:text-xs">
              <Music strokeWidth={2.5} />
              Lofi Music
            </CardTitle>
            {/* <CardDescription>
          Invite your team members to collaborate.
        </CardDescription> */}
          </CardHeader>
        </Card>
        <Card className=" w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 xs:flex-col xs:text-xs ">
              <TimerReset strokeWidth={2.5} />
              Pomodoro Tecnice
            </CardTitle>
            {/* <CardDescription>
          Invite your team members to collaborate.
        </CardDescription> */}
          </CardHeader>
        </Card>
        <Card className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 xs:flex-col xs:text-xs">
              <Users strokeWidth={2.5} />
              Community
            </CardTitle>
            {/* <CardDescription>
          Invite your team members to collaborate.
        </CardDescription> */}
          </CardHeader>
        </Card>
      </div>
      

      </section>
      
      {/* <div className="max-w-[1000px]  flex justify-between items-start mt-2 gap-24 xs:gap-7 xs:flex-col xs:items-center" > */}

      <div className=" flex flex-col  items-center md:justify-center md:flex-row md:mb-40 md:px-6 mt-20  gap-6">
        <Image
          src="/sculpturemusicbg.png"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl xs:w-80 "
          width={380}
          height={380}
        />
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-start md:ml-4 lg:text-5xl  ">
            Lofi Music
          </h3>
          <p className="text-justify px-7 md:px-4">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px] md:text-start md:ml-3">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
      </div>

      <div className="flex  mt-20 gap-7  flex-col-reverse items-center md:justify-center md:flex-row md:mb-40   md:px-6  ">
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl ">
            Pomodoro Tecnique
          </h3>

          <p className="text-justify px-7 md:px-4">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px] md:text-start md:ml-3">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
        <Image
          src="/pomodorosculpture.png"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl xs:w-80 "
          width={380}
          height={380}
        />
      </div>

      <div className=" flex flex-col  items-center md:justify-center md:flex-row  md:px-6 md:mb-40  mt-20 gap-6">
        <Image
          src="/community.png"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl xs:w-80 "
          width={380}
          height={380}
        />
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-start md:ml-4 lg:text-5xl  ">
            Community
          </h3>
          <p className="text-justify px-7 md:px-4">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px] md:text-start md:ml-3">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
