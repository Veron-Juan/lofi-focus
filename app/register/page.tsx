"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Register() {


  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
      return <p>Loading...</p>;
    }
  
  if (session.status === "authenticated") {
      router?.push("/");
    }

  const [error, setError] = useState(null);

  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/login?success=Account has been created");
    } catch (err:any) {
      setError(err);
      console.log(err);
    }
  };




  return (
    <div className="max-w-md mx-auto">
        
    <Card>
      
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-2">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="username" placeholder="@example" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
            
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="*********" />
        </div>

        <Button className="w-full mt-5">Create account</Button>
        
        </form>

      {/* <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter> */}

      </CardContent>
    </Card>
    </div>
  )
}