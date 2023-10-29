import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import MyChannel from "./components/MyChannel";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/profile" element={<Profile />} >
          <Route path="my-channel" element={<MyChannel />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;