import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // ✅ fixed path
import Posts from "./components/Posts";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;