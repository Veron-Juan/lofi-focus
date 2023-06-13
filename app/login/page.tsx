"use client"

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
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function DemoCreateAccount() {


  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
      return <div className="flex h-screen">
      <div className="m-auto">
        <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin"></div>
      </div>
    </div>
    }
  
  if (session.status === "authenticated") {
      router?.push("/");
    }



  const handleSubmit =  (e:any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // signIn("credentials", {
    //   email,
    //   password,
    // });

    // try {
    //   const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });
    //   console.log("hereeee",res)
    //   // res.status === 201 && router.push("/login?success=Account has been created");
    // } catch (err:any) {
    //   // setError(err);
    //   console.log(err);
    // }

    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Credenciales inválidas');
        }
      })
      .then((data) => {
        const { user } = data;
        // Aquí puedes acceder a los datos del usuario y al token de autenticación
        console.log(user); // Aquí se mostrará la información del usuario
         // Aquí se mostrará el token de autenticación
        // Realiza las operaciones necesarias con los datos del usuario y el token
      })
      .catch((error) => {
        console.error(error);
      });

  };




  return (
    <div className="max-w-md mx-auto">
        
    <Card>
      <div className="flex items-center justify-center gap-2 relative mr-12">
    <img className=" mt-6" src="/sculptureLogin.svg" width={190}  alt="login" />
    <h2 className="font-bold text-xl absolute right-[50px]">Lofi Focus</h2>

      </div>
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
          <Button onClick={()=> signIn("google")} variant="outline">
            
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
        <form onSubmit={handleSubmit}  className="grid gap-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full mt-5">Log in</Button>
        </form>
      </CardContent>
      {/* <CardFooter>
        <Button className="w-full">Log in</Button>
      </CardFooter> */}
    </Card>
    </div>
  )
}