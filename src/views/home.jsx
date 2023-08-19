import { useState, useCallback } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/home.css'
// import { Modal } from 'bootstrap'
import Modal from '../components/modal.jsx'
import ParticlesBackground from '../components/particlesBackground.jsx'

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
          <a href="https://reactjs.org" target="_blank">
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
        <div className='welcome-button'>
          <button>
            Enter
          </button>
        </div>
      </div>
    )
  }