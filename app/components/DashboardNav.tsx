'use client'
import { NotebookPen, Settings,CreditCard,Image,KeyRound,Palette    } from 'lucide-react';

import Link from "next/link";

import { usePathname } from "next/navigation"
import {  getDataStripeUser } from "@/lib/actionsStripe";
import { getUser } from "@/lib/actionsUsers";

export default function DashboardNav() {


  const dataStripe = async () => {
    const user = await getUser();
    await getDataStripeUser(user?.id as string);
  }

  const pathname = usePathname()

  const menuDashboard = [
    { name: "Notes", icon: NotebookPen, path: "/dashboard/notes" },
    { name: "Compresseur", icon: Image , path: "/dashboard/compressor" },
    { name: "Générateur Mot de passe", icon: KeyRound   , path: "/dashboard/passwordGenerator" },
    { name: "Générateur Couleurs", icon: Palette , path: "/dashboard/colorsGenerator" },
    { name: "Paiement", icon: CreditCard , path: "/dashboard/payment" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];


  return (
    <nav className="flex md:flex-col md:h-full md:w-16 w-full lg:w-60 gap-2">
      {menuDashboard.map((link, index) => 
        { const isActive = pathname.startsWith(link.path)
         return (
        <Link href={link.path} key={index} passHref>
          <div className={`flex items-center justify-center lg:justify-start gap-2 cursor-pointer lg:p-3 p-3 hover:bg-orange-500  hover:bg-opacity-50 hover:text-white text-sm font-bold rounded-md ${isActive && "bg-orange-500 text-white"}`} >
            <link.icon className='w-4' />
            <span className="hidden lg:block">{link.name}</span>
          </div>
        </Link>
      )})}
    </nav>
  );
}