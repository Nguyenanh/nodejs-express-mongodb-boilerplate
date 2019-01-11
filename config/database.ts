class Database {
  public url
  constructor () {
    this.url = 'mongodb://localhost:27017/boilerplate'
  }
}
export default new Database().url
