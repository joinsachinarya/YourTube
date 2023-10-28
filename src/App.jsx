import Body from './components/Body';
import { Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
// import appRouter from './appRoutes';

function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </>
  )
}


import { createBrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  }
])

// export default appRouter;

export default App
