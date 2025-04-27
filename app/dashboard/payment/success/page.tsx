import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link"
import { BadgeCheck} from 'lucide-react';


export default function SuccessPage() {

  return (
    <section className='w-full h-screen pt-20 text-center'>
      <Card className='w-[400px] mx-auto p-4'>
       <BadgeCheck className="text-8xl mb-3 text-green-500 text-center w-full"/>
      <h1 className="text-xl  font-black mb-2 text-center uppercase ">Paiement réussi !</h1>
      <p className="text-muted-foreground text-sm mb-2">Vous etes maintenant membre premium</p>
      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white"><Link href="/dashboard/payment">Retour sur le Dashboard </Link></Button>
        </Card>
      </section>
  );
}
