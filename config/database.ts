import * as dotenv from "dotenv";
dotenv.config();

class Database {
  public url
  constructor () {
    this.url = process.env.DATABASE
  }
}
export default new Database().url
