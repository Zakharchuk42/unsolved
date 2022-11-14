import styled from 'styled-components'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { StartPage } from '../pages/StartPage/StartPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFound } from '../pages/NotFound/NotFound'
import ResponsiveRoutesPage from '../pages/PopupsRoutes/PopupRoutesPage'
import { useEffect } from 'react'
import { getCookie } from '../hooks/useCookies'
import { COOKIE_NAME } from '../const/variables'
import { useDispatch } from 'react-redux'
import { USER_TYPES } from '../Store/types'
import { ROUTES } from '../const/routes'
import useAuth from '../hooks/useAuth'
import PrivateRoute from '../hoc/PrivateRoute'
import CloseRoute from '../hoc/CloseRoute'

const MainAppStyled = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
`

function MainApp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLogin } = useAuth()

  useEffect(() => {
    const cookie = getCookie(COOKIE_NAME)

    if (cookie) {
      const user = JSON.parse(cookie)
      dispatch({ type: USER_TYPES.LOG_IN, payload: { ...user } })
      navigate(ROUTES.HOME, { replace: true })
    }
  }, [isLogin])

  return (
    <MainAppStyled>
      <Routes>
        <Route
          path={ROUTES.START}
          element={
            <CloseRoute>
              <StartPage />
            </CloseRoute>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <ResponsiveRoutesPage />
    </MainAppStyled>
  )
}

export default MainApp
