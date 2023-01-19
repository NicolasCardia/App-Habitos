import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(
  cors
  /*{
  origin: ["http://localhost:3000"],
} */
); //integração para o front-end pode acessar a aplicação

/* 
  Rotas: Get, Post, Delete, Patch e Put
*/
app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Ir",
      },
    },
  });

  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server runnig");
  });
