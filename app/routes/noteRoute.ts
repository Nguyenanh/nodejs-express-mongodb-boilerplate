import NoteControllerCreate from '../controllers/noteController/create'
import NoteContractCreate from '../contracts/noteContract/create'

export default class NoteRoute {

  public noteControllerCreate: NoteControllerCreate = new NoteControllerCreate()
  public noteContractCreate: NoteContractCreate = new NoteContractCreate()

  constructor (router) {
    // Create a new Note
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
