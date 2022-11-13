import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { USER_TYPES } from '../types'

export const onRegister =
  ({ email, password }) =>
  async (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({
          type: USER_TYPES.LOG_IN,
          payload: {
            uid: user.uid,
            name: user.email.split('@')[0],
          },
        })
      })
      .catch(console.error)
  }

export const onLogin =
  ({ email, password }) =>
  async (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({
          type: USER_TYPES.LOG_IN,
          payload: {
            uid: user.uid,
            name: user.email.split('@')[0],
          },
        })
      })
      .catch(console.error)
  }
