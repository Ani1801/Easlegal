import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resources from '@/pages/Resources';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resources" element={<Resources />} />
                    {/* Add more routes here */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
