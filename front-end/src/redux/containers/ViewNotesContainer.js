import { connect } from 'react-redux'
// import * as actions from '../actions/actions'
import * as apis from '../../api/api'
import ViewNotes from '../../component/ViewNotes/ViewNotes'

const mapPropsToState = (state, ownProps) => {
  return {
    notes: state.notesReducer.notes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteNote: (deleteNotePayload) => { dispatch(apis.deleteNote(deleteNotePayload)) },
    getNotes: () => { dispatch(apis.getNotes()) }
  }
}

const ViewNotesContainer = connect(
  mapPropsToState,
  mapDispatchToProps
)(ViewNotes)

export default ViewNotesContainer
