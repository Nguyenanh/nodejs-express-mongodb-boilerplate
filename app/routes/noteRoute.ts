import { NoteController } from '../controllers/noteController/create'
import { NoteContract } from '../contracts/noteContract/create'

export class NoteRoute {

  public noteControllerCreate: NoteController = new NoteController.Create()
  public noteContractCreate: NoteContract = new NoteContract.Create()

  constructor (router) {
    router.post('/notes', this.noteContractCreate, this.noteControllerCreate.call)
  }
}

// module.exports = (app) => {
//   const notes = require('../controllers/note.controller.js');
//
//   // Create a new Note
//   app.post('/notes', notes.create);
//
//   // Retrieve all Notes
//   app.get('/notes', notes.findAll);
//
//   // Retrieve a single Note with noteId
//   app.get('/notes/:noteId', notes.findOne);
//
//   // Update a Note with noteId
//   app.put('/notes/:noteId', notes.update);
//
//   // Delete a Note with noteId
//   app.delete('/notes/:noteId', notes.delete);
// }
