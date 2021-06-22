import * as actionTypes from './actionTypes'

export function addingNotes (addingNotesRequest) {
  return {
    type: actionTypes.ADD_NOTE,
    note: addingNotesRequest
  }
}

export function createNote (createNotePayload) {
  return {
    type: actionTypes.CREATE_NOTE,
    createNotePayload
  }
}

export function storeNotes (notes) {
  return {
    type: actionTypes.STORE_NOTES,
    notes
  }
}

export function deleteNote (deleteNotePayload) {
  return {
    type: actionTypes.DELETE_NOTE,
    deleteNotePayload
  }
}

export function editNote (editNotePayload) {
  return {
    type: actionTypes.EDIT_NOTE,
    editNotePayload
  }
}
