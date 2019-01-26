import Note from '../../models/noteModel'
import { validationResult } from 'express-validator/check'
// import BaseController from './baseController'

export default class Create {
  constructor() {}

  public call(req, res, next) {
    var errors = validationResult(req)
    if (errors) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a Note
     const note = new Note({
       title: req.body.title || "Untitled Note",
       content: req.body.content
     });

     // Save Note in the database
     note.save()
     .then(data => {
       res.send(data);
     }).catch(err => {
       res.status(500).send({
         message: err.message || "Some error occurred while creating the Note."
       });
     });
  }
}

// export default class NoteController {
//
// }

//
// const Note = require('../models/note.model.js');
//
// // Create and Save a new Note
// exports.create = (req, res) => {
   // // Create a Note
   //  const note = new Note({
   //    title: req.body.title || "Untitled Note",
   //    content: req.body.content
   //  });
   //
   //  // Save Note in the database
   //  note.save()
   //  .then(data => {
   //    res.send(data);
   //  }).catch(err => {
   //    res.status(500).send({
   //      message: err.message || "Some error occurred while creating the Note."
   //    });
   //  });

//
// };
//
// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
//
// };
//
// // Find a single note with a noteId
// exports.findOne = (req, res) => {
//
// };
//
// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//
// };
//
// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//
// };
