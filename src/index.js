import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.sass'

ReactDOM.render(
    <BrowserRouter basename="/bac-average-calculator-react"><App /></BrowserRouter>,
    document.getElementById('root')
)