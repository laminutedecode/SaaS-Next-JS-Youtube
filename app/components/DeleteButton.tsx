import { deleteNote } from '@/lib/actionsNotes';
import { Button } from "@/components/ui/button";
import { Trash2 } from 'lucide-react';


interface DeleteButtonProps {
  id: string; 
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <form action={deleteNote}>
      <input type="hidden" name="id" value={id} />
      <Button type="submit" className="text-white bg-red-500 hover:bg-red-600">    <Trash2 className='w-4 h-4' />
</Button>

    </form>
  );
}
