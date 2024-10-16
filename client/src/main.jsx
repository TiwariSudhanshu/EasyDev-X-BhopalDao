import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThirdwebProvider>

  </StrictMode>
)
