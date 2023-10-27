import appRouter from '../appRoutes'
import './App.css'
import Navbar from './components/navbar'
import Body from './components/Body'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </>
  )
}

export default App
