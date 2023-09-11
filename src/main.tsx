import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './providers'
import { App } from './app'

const rootEl = document.getElementById('root') as HTMLElement

ReactDOM
  .createRoot(rootEl)
  .render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>,
  )
