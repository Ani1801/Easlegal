import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resources from '@/pages/Resources';
import OurFirm from '@/pages/About/OurFirm';
import OurTeam from '@/pages/About/OurTeam';
import Blogs from '@/pages/Resources/Blogs';
import ServiceDetail from '@/pages/Services/ServiceDetail';
import Careers from '@/pages/Careers';
import ScrollToTop from '@/components/common/ScrollToTop';

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/our-firm" element={<OurFirm />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/resources/blogs" element={<Blogs />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/services/:id" element={<ServiceDetail />} />
                    {/* Add more routes here */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
