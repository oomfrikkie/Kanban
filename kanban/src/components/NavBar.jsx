
import { Routes, Route, Link } from 'react-router-dom';

 export default function NavBar()
 {
    return(
        <div className='w-[10%] flex flex-col gap-6'>
         <h1 className='text-4xl'>test</h1>
           <nav className='flex flex-col gap-3 text-center '>
                     <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
                     <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
                     <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
                     <Link to='/board' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Board</Link>
                     <h1>Dummy</h1>
                     <Link to='/test' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Test</Link>
                     <Link to='/login' className='p-2 w-100 bg-white rounded-full hover:bg-gray-300'>Login</Link>
            </nav>
        </div>
    )
 }