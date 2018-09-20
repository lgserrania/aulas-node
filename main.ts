import {Server} from './server/server'
import {usersRouter} from './users/users.router'

const server = new Server()

server.bootstrap([usersRouter]).then(server => {
    console.log('O servidor está rodando em ', server.application.address())
}).catch(error => {
    console.log('Servidor falhou!')
    console.log(error)
    process.exit(1)
})




