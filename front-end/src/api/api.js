import * as actions from '../redux/actions/actions'
import fetch from 'cross-fetch'

const apiEndpoint = 'http://ec2-13-126-193-205.ap-south-1.compute.amazonaws.com:8000'
// create a note

export function createNote (createNotePayload) {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/notes`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createNotePayload)
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.createNote(json))
    }))
  }
}

// get all the notes
export function getNotes () {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/notes`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.storeNotes(json))
    }))
  }
}
// to delete a note
export function deleteNote (note) {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/notes/${note._id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.deleteNote(json))
    }))
  }
}

// to update a note

export function editNote (note) {
  return function (dispatch) {
    return fetch(`${apiEndpoint}/notes/${note._id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }).then(response => response.json().then(json => {
      console.log(json)
      dispatch(actions.editNote(json))
    }))
  }
}
