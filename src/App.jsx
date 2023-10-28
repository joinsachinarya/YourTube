import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Navbar />
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  }
]);
export default App;