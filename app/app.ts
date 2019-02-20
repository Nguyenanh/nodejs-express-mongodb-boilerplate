import * as express from 'express'
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as fs from 'fs'
import * as expressValidator from 'express-validator'
import noteRoute from './routes/noteRoute'

class App {
  public express
  public logPath

  constructor () {
    this.express = express()
    this.logPath = path.join(__dirname, '../log/' + (process.env.NODE_ENV || 'development') + '.log')
    this.mountMiddleware()
    this.mountRoutes()
  }

  // Configure Express middleware.
  private mountMiddleware(): void {

    // create a write stream (in append mode)
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(path.dirname(this.logPath));
    }

    var accessLogStream = fs.createWriteStream(this.logPath, { flags: 'a' });
    // setup the logger
    this.express.use(morgan('combined', { stream: accessLogStream }));

    // parse requests of content-type - application/x-www-form-urlencoded
    this.express.use(bodyParser.urlencoded({ extended: true }))

    // parse requests of content-type - application/json
    this.express.use(bodyParser.json())
    this.express.use(expressValidator())
  }

  private mountRoutes (): void {
    const router = express.Router()
    new noteRoute(router)

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
