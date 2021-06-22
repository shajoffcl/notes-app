import { connect } from 'react-redux'
// import * as actions from '../actions/actions'
import * as apis from '../../api/api'
import Notes from '../../component/Notes/Notes'

const mapPropsToState = (state, ownProps) => {
  return {
    notes: state.notesReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNote: (createNotePayload) => { dispatch(apis.createNote(createNotePayload)) },
    editNote: (editNotePayload) => { dispatch(apis.editNote(editNotePayload)) }
  }
}

const NotesContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(Notes)

export default NotesContainer
