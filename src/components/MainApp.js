import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { StartPage } from '../pages/StartPage/StartPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFound } from '../pages/NotFound/NotFound'
import ResponsiveRoutesPage from '../pages/PopupsRoutes/PopupRoutesPage'
import { useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const MainAppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

function MainApp() {
  useEffect(() => {
    getAuth()
      .revokeRefreshTokens('lHW6vi4iIDMe7S4Cv2PdXJmNIKY2')
      .then(() => {
        return getAuth().getUser('lHW6vi4iIDMe7S4Cv2PdXJmNIKY2')
      })
      .then((userRecord) => {
        return new Date(userRecord.tokensValidAfterTime).getTime() / 1000
      })
      .then((timestamp) => {
        console.log(`Tokens revoked at: ${timestamp}`)
      })
  }, [])

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
