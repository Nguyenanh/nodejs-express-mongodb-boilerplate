import Note from '../../models/noteModel'

export default class Index {
  constructor() {}

  public call(req, res, next) {
    Note.find({}, function(err, notes){
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
        });
      } else {
        res.json(notes)
      }
    })
  }
}
