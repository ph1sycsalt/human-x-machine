import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import InteractiveBackground from './components/InteractiveBackground';
import Home from './pages/Home';
import Units from './pages/Units';
import About from './pages/About';
import Theme from './pages/Theme';
import Resources from './pages/Resources';
import Team from './pages/Team';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <InteractiveBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:unitId" element={<Units />} />
          <Route path="/about" element={<About />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;