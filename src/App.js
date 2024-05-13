import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}