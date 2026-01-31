import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StockAnalysisDashboard from './stockAnalysisDashboard/stockAnalysisDashboard.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StockAnalysisDashboard />
  </StrictMode>,
)
