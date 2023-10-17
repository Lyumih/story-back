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
    return this.orient.query("select *, out_HeroSkill:{*, in, in: {*} as skill} as skills from hero").all()
  })

  app.get("/skill", async function () {
    const skills = await this.orient.query<Repo>("select from Skill").all()
  })

  app.get("/test", async function () {
    return this.orient
      .query<Repo>("select *, out(HeroSkill):{*} as skills, out(HeroWeapons):{*} as weapons from hero").all()
  })
}