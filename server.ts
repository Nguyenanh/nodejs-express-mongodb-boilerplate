import app from './app/app'
import * as mongoose from 'mongoose'
import database from './config/Database'
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.set('debug', true);

mongoose.connect(database, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
