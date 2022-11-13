import { USER_TYPES } from '../types'

const INITIAL_STATE = {
  uid: '',
  name: '',
}

export const ReducerUser = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_TYPES.LOG_IN: {
      let newState = { ...state }
      newState = {
        uid: payload.uid,
        name: payload.name,
      }
      return newState
    }
    case USER_TYPES.LOG_OUT: {
      return
    }
    default:
      return state
  }
}
