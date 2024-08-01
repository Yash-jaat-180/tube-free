import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login.jsx'
import Signup from './components/Auth/Signup.jsx'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header/Header.jsx'
import Logo from './components/Atom/Logo.jsx'
import VideoCards from './components/Video/VideoCards.jsx'

// Add the host command in your package.json and run a cmmnd npm run host and then type thrd url in your mobile then it will start in the mobile browser

function App() {

  return (
    <>
      <VideoCards />
    </>
  )
}

export default App
