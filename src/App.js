import React from 'react'
import { HashRouter } from "react-router-dom"

import './App.scss'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import router from "./router"

function App() {
  return (
    <HashRouter>
      <Header />
      <Sidebar />
      {router}
      <Footer />
    </HashRouter>
  )
}

export default App
