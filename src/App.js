import './App.css';
import AboutMe from './container/AboutMe/AboutMe';
import ContactMe from './container/ContacMe/ContactMe';
import Resume from './container/Resume/Resume';
// import Friend from './container/Friend/Friend';
import Home from './container/Home/Home';
import Footer from './container/Footer/Footer';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Home />
      <AboutMe />
      <Resume />
      {/* <Friend /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
