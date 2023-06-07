"use client"

import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
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
      <section className="flex justify-center   max-w-7xl mx-auto mt-6 xs:flex-col xs:items-center xs:px-7 ">
        <div className="flex max-w-[900px] flex-col  justify-start">
          <h1 className=" lg:text-7xl font-extrabold leading-tight tracking-tighter md:text-4xl xs:text-3xl text-black dark:text-white">
            Welcome to Lofi Focus
          </h1>
          <h2 className=" my-6  leading-tight tracking-tighter md:text-4xl xs:text-2xl  text-black dark:text-white">
            Your space for relaxation and concentration.{" "}
          </h2>
          <p className="text-xl xs:text-[16px] max-w-[700px] text-muted-foreground">
            Lofi music is a style of music popular for its soothing, soft and
            nostalgic sound, ideal for studying, working and relaxing. On our
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
        <div className="flex-1 flex justify-end mt-4">
          <img
            className="max-w-md h-auto xs:w-[220px] xs:h-[220px]"
            src="/hero.png"
            alt="hero"
          />
        </div>

        {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}

<div className="flex  gap-6   mt-12  ">
        <Card className="w-[300px] xs:w-[90px] xs:h-[90px] h-40 flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60 ">
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
        <Card className=" w-[300px] xs:w-[90px] xs:h-[90px]  h-40 flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60">
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
        <Card className="w-[300px] xs:w-[90px] xs:h-[90px]   h-40 flex items-center justify-center gap-3  hover:bg-neutral-200/90 dark:hover:bg-inherit dark:hover:opacity-60">
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

      <div className=" flex flex-col  mx-auto items-center mt-20 gap-6">
        <Image
          src="/sculpturemusicbg.png"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl xs:w-80 "
          width={380}
          height={380}
        />
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  ">
            Lofi Music
          </h3>
          <p className="text-justify px-7">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px]">
            <Link
              href="/lofi"
              className={buttonVariants({ variant: "black", size: "default" })}
            >
              Try Now lofi
            </Link>
          </div>
        </div>
      </div>

      <div className="flex  mt-20 gap-7  flex-col-reverse items-center  ">
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
            Pomodoro Tecnique
          </h3>

          <p className="text-justify px-7">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px]">
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

      <div className="flex flex-col  mx-auto items-center mt-20 gap-6">
        <Image
          src="/community.png"
          alt="image"
          className=" object-cover  rounded-lg shadow-xl xs:w-80 "
          width={380}
          height={380}
        />
        <div className="flex flex-col gap-5 max-w-[480px]  xs:my-1  xs:text-center">
          <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  ">
            Community
          </h3>
          <p className="text-justify px-7">
            Edit photos quickly and accurately without all the effort. PhotoRoom
            makes it easy to keep the focus on the foreground, plus it's 2x more
            accurate than other apps.
          </p>
          <div className="text-[15px]">
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
