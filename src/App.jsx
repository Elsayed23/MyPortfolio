import React from 'react';
import { Route, Routes, HashRouter as Router, useLocation } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import AllProjects from './Components/Projects/AllProjects';
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound';
import { AnimatePresence } from 'framer-motion';


const PageRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<AllProjects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>

  )
}


const App = () => {

  return (
    <Router>
      <PageRoutes />
    </Router>
  );
}

export default App;