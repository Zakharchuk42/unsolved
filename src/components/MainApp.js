import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

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

const MainAppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

function MainApp() {
  const dispatch = useDispatch()

  useEffect(() => {
    const cookie = getCookie(COOKIE_NAME)

    if (cookie) {
      const user = JSON.parse(cookie)
      dispatch({ type: USER_TYPES.LOG_IN, payload: { ...user } })
    }
  }, [])

  return (
    <MainAppStyled>
      <Routes>
        <Route path={ROUTES.START} element={<StartPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route element={<NotFound />} />
      </Routes>
      <ResponsiveRoutesPage />
    </MainAppStyled>
  )
}

export default MainApp
