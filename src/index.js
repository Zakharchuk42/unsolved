import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import MainApp from './components/MainApp'
import { theme } from './const/variables'
import { BrowserRouter } from 'react-router-dom'
import './firebase'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './Store/reducers'
import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
)
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
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <MainApp />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)
