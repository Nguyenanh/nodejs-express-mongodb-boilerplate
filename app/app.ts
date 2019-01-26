import * as express from 'express'
import * as path from 'path';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as fs from 'fs'
import * as expressValidator from 'express-validator'
import { NoteRoute } from './routes/noteRoute'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountMiddleware()
    this.mountRoutes()
  }

  // Configure Express middleware.
  private mountMiddleware(): void {

    // create a write stream (in append mode)
    var accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/development.log'), { flags: 'a' });
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
    new NoteRoute(router)

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
