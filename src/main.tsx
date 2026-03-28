import '@primer/primitives/dist/css/primitives.css'
import '@primer/primitives/dist/css/functional/size/border.css'
import '@primer/primitives/dist/css/functional/size/radius.css'
import '@primer/primitives/dist/css/functional/size/size.css'
import '@primer/primitives/dist/css/functional/typography/typography.css'
import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/themes/dark.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, BaseStyles, Button } from '@primer/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <Button>Primer is working</Button>
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>
)