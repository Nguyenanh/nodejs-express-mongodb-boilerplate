import { check } from 'express-validator/check'

export namespace NoteContract {
  export class Create {
    constructor() {
      return [
        check('title').isLength({ min: 30 })
       ]
    }
  }
}
