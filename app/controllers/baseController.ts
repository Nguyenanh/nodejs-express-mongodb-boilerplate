class BaseController {
    format: object;
    constructor() {
      this.format = ({ location, msg, param, value, nestedErrors }) => {
      // Build your resulting errors however you want! String, object, whatever - it works!
      return {
        param : msg
      }
    };
  }
}

export default BaseController
