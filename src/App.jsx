import { } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Body from './components/Body'

function App() {

  return (
    <>
      <Navbar />
      <div className=''>
        <Sidebar />
        <Body />
      </div>
    </>
  )
}

export default App
