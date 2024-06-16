"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db"
import { getUser } from "./actionsUsers";

export const getAllNotes = async (userId: string) =>{
  const data = await prisma.notes.findMany({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: "desc",
    }
  });
  return data
}


export const createNote = async (formData:FormData)=> {

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const completed = formData.get("completed")
  const user = await getUser();
  const userId = user?.id as string

  await prisma.notes.create({
    data: {
      userId: userId,
      title: title,
      description: description,
      completed: completed === "on",
    }
  });
  redirect('/dashboard/notes')
}


export const deleteNote = async(formData:FormData)=> {
  const id = formData.get('id') as string;
  await prisma.notes.delete({
    where: {id}
  });
  revalidatePath('/')
}

export const getNote = async(id:string)=> {

  const note = prisma.notes.findUnique({
    where: {id: id}
  })
  return note;
}

export const updateNote = async (formData: FormData) => {
  try {
    const id = formData.get('id') as string;
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const completed = formData.get("completed")

    if (title !== null || description !== null) {
      await prisma.notes.update({
        where: { id },
        data: { title: title, description: description, completed: completed === "on" },
      });
    }
  } catch (error) {
    console.error('Error updating note:', error);
  } finally {
    redirect('/'); 
  }
};