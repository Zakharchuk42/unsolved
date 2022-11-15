import { combineReducers } from 'redux'
import { ReducerUser } from './ReducerUser'
import { ReducerCaseFiles } from './ReducerCaseFiles'

export default combineReducers({
  RUser: ReducerUser,
  RCaseFiles: ReducerCaseFiles,
})
