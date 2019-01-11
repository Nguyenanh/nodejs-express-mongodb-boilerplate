"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const mongoose = require("mongoose");
const Database_1 = require("./config/Database");
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(Database_1.default, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
const port = process.env.PORT || 3000;
app_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map