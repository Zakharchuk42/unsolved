import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { StartPage } from '../pages/StartPage/StartPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFound } from '../pages/NotFound/NotFound'
import ResponsiveRoutesPage from '../pages/PopupsRoutes/PopupRoutesPage'

const MainAppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

function MainApp() {
  return (
    <MainAppStyled>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route element={<NotFound />} />
      </Routes>
      <ResponsiveRoutesPage />
    </MainAppStyled>
  )
}

export default MainApp
