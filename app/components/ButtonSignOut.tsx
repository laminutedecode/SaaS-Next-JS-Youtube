"use client"
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut} from 'lucide-react';

export default function ButtonSignOut() {

  const  router = useRouter()

  const handleSignOut = ()=> {
    signOut()
    router.push('/')
  }

  return (
    <div className="flex items-center justify-end mb-2 mt-3 lg:mt-0 p-3 ">       
      <Button onClick={handleSignOut} className="bg-orange-500 hover:bg-orange-600 text-white">
      <LogOut />
      </Button>  
    </div>
  )
}

