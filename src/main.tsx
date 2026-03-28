import '@primer/primitives/dist/css/primitives.css'
import '@primer/primitives/dist/css/functional/size/border.css'
import '@primer/primitives/dist/css/functional/size/radius.css'
import '@primer/primitives/dist/css/functional/size/size.css'
import '@primer/primitives/dist/css/functional/typography/typography.css'
import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/themes/dark.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, BaseStyles } from '@primer/react'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <Login />
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>
)