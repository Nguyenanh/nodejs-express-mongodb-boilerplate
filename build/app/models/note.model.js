"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
exports.default = mongoose.model('Note', NoteSchema);
//# sourceMappingURL=note.model.js.map