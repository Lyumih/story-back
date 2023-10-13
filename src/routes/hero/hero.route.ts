import { FastifyInstance } from 'fastify';

type V = {
  '@class': string,
  '@rid': string,
  '@version': number,
}

type Repo = {
  title: string,
  uri: string,
}

export const heroRouter = async (app: FastifyInstance) => {

  app.get("/", async function () {
    return this.orient.query<Repo>("select from Hero").all()
  })

  app.get("/skill", async function () {
    return this.orient.query<Repo>("select from Skill").all()
  })

  app.get("/test", async function () {
    return this.orient.query<Repo>("select *, in().toJson(), out().toJson() from hero").all()
  })
}