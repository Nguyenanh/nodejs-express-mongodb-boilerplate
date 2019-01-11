"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs");
const note_routes_1 = require("./routes/note.routes");
class App {
    constructor() {
        this.express = express();
        this.mountMiddleware();
        this.mountRoutes();
    }
    // Configure Express middleware.
    mountMiddleware() {
        // create a write stream (in append mode)
        var accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/development.log'), { flags: 'a' });
        // setup the logger
        this.express.use(morgan('combined', { stream: accessLogStream }));
        // parse requests of content-type - application/x-www-form-urlencoded
        this.express.use(bodyParser.urlencoded({ extended: true }));
        // parse requests of content-type - application/json
        this.express.use(bodyParser.json());
    }
    mountRoutes() {
        const router = express.Router();
        new note_routes_1.default(router);
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map