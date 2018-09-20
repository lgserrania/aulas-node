import * as restify from 'restify'
import {environment} from '../common/environment'
import {Router} from '../common/router'

export class Server{

    //o ! é necessário para variáveis que são declaradas fora do construtor
    application!: restify.Server

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject) =>{
            try {

                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                })
                
                //Plugin do restify para realizar a leitura dos parâmetros enviados a url
                this.application.use(restify.plugins.queryParser())

                //routes
                for(let router of routers){
                    router.applyRoutes(this.application)
                }

                this.application.get('/', (req, resp, next) => {
                    //O método JSON executa dois comandos por baixo dos panos
                    //contentType e send
                    resp.json({
                        message: "Hello Boys",
                        browser: req.userAgent(),
                        method: req.method,
                        url: req.href(),
                        path: req.path(),
                        query: req.query
                    })
                    return next();
                })

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })


            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: Router[] = []): Promise<Server>{
        return this.initRoutes(routers).then(() => this)
    }
}