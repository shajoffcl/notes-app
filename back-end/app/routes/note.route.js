module.exports = (app) => {
  const notes = require('../controllers/note.controller')
  // create a new note
  app.post('/notes', notes.create)
  // fetching all the notes
  app.get('/notes', notes.findAll)
  // deleting a note
  app.delete('/notes/:noteId', notes.delete)
  // updating a note
  app.put('/notes/:noteId', notes.update)
}
