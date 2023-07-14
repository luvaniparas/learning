import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/db";
import { TodoItem } from "../components/TodoItem";

async function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  //await prisma.todo.create({ data: { title: "Watch Movie", complete: false } });
  // const todos = await prisma.todo.findMany();

  const todos = await getTodos();

  return (
    <>
      <header>
        <h1> To-dos </h1>

        {/* <Link href="/paras">Go to Paras</Link> */}
      </header>

      <h1> List :: </h1>

      <ul className="pl-4">
        {todos.map((todo) => (
          // <li key={todo.id}>
          //   {todo.id} - {todo.title}
          // </li>
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
