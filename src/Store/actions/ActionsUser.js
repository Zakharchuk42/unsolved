import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { COOKIE_NAME } from '../../const/variables'
import { removeCookie, setCookie } from '../../hooks/useCookies'
import { splitEmail } from '../../_helper/_helper'
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
            name: splitEmail(user.email),
          },
        })

        setCookie(
          COOKIE_NAME,
          JSON.stringify({
            uid: user.uid,
            name: splitEmail(user.email),
          })
        )
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
            name: splitEmail(user.email),
          },
        })
        removeCookie(COOKIE_NAME)
        setCookie(
          COOKIE_NAME,
          JSON.stringify({
            uid: user.uid,
            name: splitEmail(user.email),
          })
        )
      })
      .catch(console.error)
  }

export const onLogOut = () => (dispatch) => {
  dispatch({
    type: USER_TYPES.LOG_OUT,
    payload: {
      uid: '',
      name: '',
    },
  })
  removeCookie(COOKIE_NAME)
}
