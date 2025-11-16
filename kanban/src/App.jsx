import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Board from './Pages/Board'
import Test from './Pages/Test'
import NavBar from './components/NavBar';
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex h-screen'>
        <NavBar />
        <div className='flex-1'>
          <Routes>
            <Route path='/board' element={<Board />}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
