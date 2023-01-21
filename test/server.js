import * as Koa from 'koa'

const app = new Koa.default()
const PORT = 1337

app.use(async (ctx, next) => {
  await next()
  ctx.body = {
    status: 'success',
    message: 'hullow orld!',
  }
})

const server = app.listen(PORT, () => {
  console.log(`Koa server listening on port: ${PORT}`)
})

export { server }
