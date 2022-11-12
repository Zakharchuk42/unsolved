import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import MainApp from './components/MainApp'
import { theme } from './const/variables'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

const GlobalTheme = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: ${theme.colors.background};
  color: ${theme.colors.white};
  overflow: hidden;
}
`

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <MainApp />
    </ThemeProvider>
  </BrowserRouter>
)
