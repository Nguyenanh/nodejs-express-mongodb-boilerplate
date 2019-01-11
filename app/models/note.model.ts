import * as mongoose from 'mongoose'

//
// export var Note: Schema = new Schema({
//   title: String,
//   content: String
// }, {
//   timestamps: true
// });
// userSchema.pre("save", function(next) {
//   if (!this.createdAt) {
//     this.createdAt = new Date();
//   }
//   next();
// });
//
// const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  title: String,
  content: String
}, {
  timestamps: true
});

export default mongoose.model('Note', NoteSchema);
