import { act } from 'react-dom/test-utils'
import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export function notesReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return state.notes
    case actionTypes.CREATE_NOTE:
      var createNewNote = [...state.notes]
      var newNoteObj = { id: createNewNote.length + 1, note: action.createNotePayload.note }
      createNewNote.push(newNoteObj)
      console.log(createNewNote)
      return Object.assign({}, state, {
        notes: createNewNote
      })
    case actionTypes.DELETE_NOTE:
      var deleteNote = [...state.notes]
      deleteNote = deleteNote.filter(note => (note._id !== action.deleteNotePayload._id))
      return Object.assign({}, state, {
        notes: deleteNote
      })
    case actionTypes.STORE_NOTES:
      var storeNotes = [...state.notes]
      storeNotes = action.notes
      return Object.assign({}, state, {
        notes: storeNotes
      })
    case actionTypes.EDIT_NOTE:
      var editNote = [...state.notes]
      console.log(editNote, state.notes, action.editNotePayload)
      editNote = editNote.map(element => {
        if (element._id === action.editNotePayload._id) {
          element.note = action.editNotePayload.note
        }
      })
      return Object.assign({}, state, {
        notes: editNote
      })
    default:
      return state
  }
}