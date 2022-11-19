import { combineReducers } from 'redux'
import { ReducerUser } from './ReducerUser'
import { ReducerCaseFiles } from './ReducerCaseFiles'
import { ReducerNotes } from './ReducerNotes'

export default combineReducers({
  RUser: ReducerUser,
  RCaseFiles: ReducerCaseFiles,
  RNotes: ReducerNotes,
})
