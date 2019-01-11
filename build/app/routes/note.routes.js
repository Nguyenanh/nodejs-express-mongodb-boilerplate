"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_controller_1 = require("../controllers/note.controller");
class NoteRoutes {
    constructor(router) {
        router.post('/notes', note_controller_1.default.create.bind(note_controller_1.default));
    }
}
exports.default = NoteRoutes;
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
//# sourceMappingURL=note.routes.js.map