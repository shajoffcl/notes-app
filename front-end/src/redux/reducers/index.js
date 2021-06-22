import { combineReducers } from 'redux'
import { notesReducer } from './reducer'

const rootReducer = combineReducers({ notesReducer })

export default rootReducer
