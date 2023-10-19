import { FastifyInstance } from 'fastify'

export const battleRouter = async (app: FastifyInstance) => {
  app.get("/", async function () {
    return "battle"
  })
}