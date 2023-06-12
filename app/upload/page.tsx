"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";


export default function page() {

    const session = useSession();

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>;
      }
    
      if (session.status === "unauthenticated") {
        router?.push("/login");
      }


    if (session.status === "authenticated") {

        return (
            <h1>BIENVENIDO</h1>
          )
    } 

  
}
