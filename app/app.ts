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
  private logFormat

  constructor () {
    this.express = express()
    this.mountMiddleware()
    this.mountRoutes()
  }

  // Configure Express middleware.
  private mountMiddleware(): void {
    this.mountLog()
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
        message: 'Hello World! Node'
      })
    })
    this.express.use('/', router)
  }

  private mountLog(): void {
    morgan.token('parameter', function getId (req) { return JSON.stringify(req.body) })
    var logPath = path.join(__dirname, '../log/' + (process.env.NODE_ENV || 'development') + '.log')
    var logFormat = ':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" Parameter :parameter Response Time :response-time[digits]ms' // https://github.com/expressjs/morgan#combined

    // setup the logger
    if (!fs.existsSync(logPath)) {
      fs.mkdirSync(path.dirname(logPath));
    }
    var accessLogStream = fs.createWriteStream(logPath, { flags: 'a' });
    this.express.use(morgan(logFormat, { stream: accessLogStream }));
  }
}

export default new App().express
