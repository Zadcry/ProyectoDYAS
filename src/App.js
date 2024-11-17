import './App.css';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './pages/home';
import Header from "./components/header/header";
import DetailedShow from "./pages/detailedShow";

function App() {
  return (
    <div className="App">
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DetailedShow" element={<DetailedShow />} />
        </Routes>

    </div>
  );
}

export default App;
