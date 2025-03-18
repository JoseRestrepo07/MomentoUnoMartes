import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './Container'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container></Container>
  </StrictMode>,
)
