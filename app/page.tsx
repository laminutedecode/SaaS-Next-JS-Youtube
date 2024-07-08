"use client"
import ButtonsProviders from "@/app/components/ButtonsProviders";
import LogoMdc from "../public/logo.svg"
import Image from "next/image"
import {useSession} from "next-auth/react"
import { redirect } from "next/navigation";
import { Typewriter , Cursor } from "react-simple-typewriter";



export default function Home() {

 

  const {data: session } = useSession()

  if(session){
    redirect("/dashboard/notes")
  }
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2 relative">

      <Image width={100} height={100} src={LogoMdc} alt="Logo La Minute De Code" className="object-contain mb-4" />
      <h1 className="text-4xl md:text-6xl  font-black mb-2 text-center uppercase flex items-center">
      <Typewriter typeSpeed={50} words={["Bienvenue", "Welcome", "Willkommen", "Bienvenido", "Benvenuto"]}loop={0} />
      <span>
        <Cursor />
      </span>
      </h1>
      <p className="my-2">Boostez votre productivité web avec notre suite tout-en-un</p>
    
      <ButtonsProviders />
     
    </section>
  );
}
