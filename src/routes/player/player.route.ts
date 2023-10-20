import { FastifyInstance } from 'fastify';

export const playerRouter = async (app: FastifyInstance) => {

  // app.get("/", async function () {
  //   return this.orient.query("select *, out_HeroSkill:{*, in, in: {*} as skill} as skills, out_HeroWeapon:{*, in, in: {*} as weapon} as weapons from hero").all()
  // })

  app.post("/", async function (req, rep) {
    // req.validateInput({ name: 'string' }, 'body')
    console.log(req.body, req.body)
    // const result =  this.orient.command("insert into player set name = :name", {params: {name: '123'}}).all()
    const result = true
    console.log(result)
    return result
  })

  app.get<{Querystring: {name: string}}>('/', async function (req) {
    console.log(req.query.name)
    return this.orient.query("select * from player where name=:name", {params: {name: '123'}}).all()
  })

}