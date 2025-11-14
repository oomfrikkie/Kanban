import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Board from './Pages/Board'
import Test from './Pages/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex h-screen'>
        <nav className='flex flex-col gap-3 text-center w-[10%]'>
          <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
          <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
          <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
          <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
          <h1>Dummy</h1>
          <Link to='/test' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Test</Link>
          <Link to='/test' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Test</Link>
         </nav>
        <div className='flex-1'>
          <Routes>
            <Route path='/board' element={<Board />}></Route>
            <Route path='/test' element={<Test />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
