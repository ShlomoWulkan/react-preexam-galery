import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GalleryApp from './components/GalleryApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GalleryApp />
  </StrictMode>,
)
