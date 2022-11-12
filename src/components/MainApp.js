import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { StartPage } from '../pages/StartPage'
import { HomePage } from '../pages/HomePage'
import { NotFound } from '../pages/NotFount'

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
    </MainAppStyled>
  )
}

export default MainApp
