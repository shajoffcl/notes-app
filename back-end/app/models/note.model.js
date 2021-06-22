const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
  note: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Note', NoteSchema)