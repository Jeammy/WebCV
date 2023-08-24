import { useState, useCallback } from 'react'
import reactLogo from '../assets/react.svg'
import '../styles/home.css'
import Modal from '../components/modal.jsx'
import ParticlesBackground from '../components/particlesBackground.jsx'
import React, { Fragment } from 'https://cdn.skypack.dev/react'
import ReactiveButton from "../components/reactiveButton.jsx"

export default function home(){
    const [count, setCount] = useState(0)
    let visible = false
    let modal = useState(0)
    function setVisibility() {
      visible = !visible
      debugger
      setModal()
    }
    function setModal() {
      if(visible) {
        return (<Modal></Modal>)
      }
    }
  
    return (
      <div className="App">
        <ParticlesBackground></ParticlesBackground>
        <div>
          <a href="https://github.com/Jeammy/WebCV" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Welcome</h1>
        <p className="read-the-docs">
          This website act as my curriculum vitae. I hope you will enjoy it!
        </p>
        <div className='reactive-button'>
          <ReactiveButton></ReactiveButton>
        </div>
      </div>
    )
  }