import fastify, { FastifyServerOptions } from "fastify";
import 'dotenv/config'

import { authRouter, battleRouter, heroRouter, playerRouter } from './routes';
import cors from '@fastify/cors'
import fastifyOrient from './orientdb-plugin';

const App = (options: FastifyServerOptions) => {
  const app = fastify(options)

  app.register(cors)
  app.register(fastifyOrient)

  app.get("/ping", async () => "SERVER");

  app.register(heroRouter, { prefix: "/api/v1/hero" })
  app.register(battleRouter, { prefix: "/api/v1/battle" })
  app.register(playerRouter, { prefix: "/api/v1/player" })
  app.register(authRouter, { prefix: "/api/v1/auth" })

  return app
}

export default App