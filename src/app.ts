import fastify, { FastifyServerOptions } from "fastify";
import 'dotenv/config'

import { heroRouter } from './routes';
import cors from '@fastify/cors'
import fastifyOrient from './orientdb-plugin';

const App = (options: FastifyServerOptions) => {
  const app = fastify(options)

  app.register(cors)
  app.register(fastifyOrient)

  app.get("/ping", async () => "SERVER");

  app.register(heroRouter, { prefix: "/api/v1/hero" })

  return app
}

export default App