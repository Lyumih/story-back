import { FastifyInstance } from 'fastify';

export const authRouter = async (app: FastifyInstance) => {


  app.post("/login", async function (req, rep) {
    // req.validateInput({ name: 'string' }, 'body')
    console.log(req.body, req.body)
    // const result =  this.orient.command("insert into player set name = :name", {params: {name: '123'}}).all()
    const result = true
    console.log(result)
    return result
  })

  app.get<{Querystring: {name: string}}>('/login', async function (req) {
    const {name} = req.query;
    return this.orient.query("select * from player where name=:name", {params: {name}}).all()
  })

}