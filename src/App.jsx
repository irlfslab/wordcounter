import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router'
import { HomePage } from "./pages/HomePage";
import { JokePage } from "./pages/JokePage";


function App() {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="joke" element={<JokePage />}></Route>
        </Routes>
  </BrowserRouter>
  );
}

export default App;