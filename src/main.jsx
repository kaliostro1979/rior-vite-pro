import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../src/styles/global/global.scss"
import "../src/styles/global/variables.scss"
import "../src/styles/global/typography.scss"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
