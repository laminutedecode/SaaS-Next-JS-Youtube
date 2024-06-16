import {Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { createNote } from "@/lib/actionsNotes";

export default function CreatePage() {
  return (
    <Card>
      <form action={createNote}>
        <CardHeader>
          <CardTitle>Nouvelle note</CardTitle>
          <CardDescription>Quelques mots pour ne pas oublier</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Titre</Label>
            <Input placeholder="Titre de votre note" required type="text" name="title" id="title"/>
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Description de votre note" required name="description" id="description"/>
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="completed">En attente | Complet</Label>
            <Input className="w-6 cursor-pointer accent-orange-500"  type="checkbox" name="completed" id="completed" />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">
            <Link href="/dashboard/notes">Annuler</Link>
          </Button>
          <Button className="bg-orange-500 mx-1 my-2 hover:bg-orange-600 text-white">Créer note</Button>

        </CardFooter>
      </form>

    </Card>
  )
}
