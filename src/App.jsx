import './App.css';
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { JokePage } from "./pages/JokePage";


function App() {
  return (
      <>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="joke" element={<JokePage />}></Route>
        </Routes>
      </>
  );
}

export default App;