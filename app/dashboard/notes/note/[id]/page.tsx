import {Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { getNote, updateNote } from "@/lib/actionsNotes";

interface Params {
  id: string ;
  title: string;
  description: string;
  completed: boolean;
}

interface UpdatePageProps {
  params: Params;
}

export default async function CreatePage({ params }: UpdatePageProps) {



  const note = await getNote( params.id )

  console.log(note);
  



  return (
    <Card>
      <form action={updateNote} >
        <Input type="hidden" value={note?.id} id="id" name="id"/>
        <CardHeader>
          <CardTitle>Modification</CardTitle>
          <CardDescription>Modifier votre note puis sauvegarder</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Titre</Label>
            <Input defaultValue={note?.title as string}  placeholder="Titre de votre note"  type="text" name="title" id="title"/>
          </div>
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="description">Description</Label>
            <Textarea defaultValue={note?.description as string}  placeholder="Description de votre note"  name="description" id="description"/>
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="completed">En attente | Complet</Label>
            <Input defaultChecked={note?.completed as boolean}   className="w-6 cursor-pointer accent-orange-500"  type="checkbox" name="completed" id="completed" />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">
            <Link href="/dashboard/notes">Annuler</Link>
          </Button>
          <Button className="bg-orange-500 mx-1 my-2 hover:bg-orange-600 text-white">Modifier</Button>

        </CardFooter>
      </form>

    </Card>
  )
}
