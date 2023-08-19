import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import '../styles/home.css'
// import { Modal } from 'bootstrap'
import Modal from '../components/modal.jsx'
import ParticlesBackground from '../components/particlesBackground.jsx'
import AnimatedButton from '../components/animatedButton.jsx'
import React, { Fragment } from 'https://cdn.skypack.dev/react'

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
          {/* <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a> */}
          <a href="https://github.com/Jeammy/WebCV" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Welcome</h1>
        <p className="read-the-docs">
          This website act as my curriculum vitae. I hope you will enjoy it!
        </p>
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          <button onClick={() => setVisibility()}>
            Show modal
          </button>
          { setModal() }
        </div> */}
        <Fragment>
          <AnimatedButton role="button" >Enter</AnimatedButton>
        </Fragment>
        {/* <div className='welcome-button'>
          <button>
            <Link to="/about">Enter</Link>
          </button>
        </div> */}
      </div>
    )
  }