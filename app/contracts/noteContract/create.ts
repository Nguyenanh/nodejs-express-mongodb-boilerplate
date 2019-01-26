import { check } from 'express-validator/check'

export default class Create {
  constructor() {
    return [
      check('title').isLength({ min: 30 })
     ]
  }
}
