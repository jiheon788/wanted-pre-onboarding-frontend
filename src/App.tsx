import './App.css';
import React from 'react';
import Nav from '@/components/Nav';
import Router from './Router';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
