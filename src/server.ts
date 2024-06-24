import { env } from "process";
import { app } from "./app";



const server = app.listen(env.PORT, () => console.log('HTTP Server Running! 🚀'))



process.on('SIGINT', () => {
  server.close()
  console.log('App encerrado :/')
})