import React from 'react'
import ReactDOM from 'react-dom/client'
import { ColorChanger } from "./components/ColorChanger"
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ColorChanger color="blue"/>
  <ColorChanger color="yellow"/>
  <ColorChanger color="brown"/>
  <ColorChanger color="cyan"/>
  </React.StrictMode>,
)
