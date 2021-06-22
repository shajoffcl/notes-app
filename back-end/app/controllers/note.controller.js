const Note = require('../models/note.model')

exports.create = (req, res) => {
  console.log(req.body.note)
  const note = new Note({
    note: req.body.note
  })
  note.save()
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}

// fetching all the notes

exports.findAll = (req, res) => {
  Note.find()
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}

// deleting a note

exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.noteId)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}

// updating a note

exports.update = (req, res) => {
  Note.findByIdAndUpdate(req.params.noteId, {
    note: req.body.note
  })
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}
