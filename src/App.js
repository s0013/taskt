import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Career from './components/Career';
import Honours from './components/Honours';
import Awards from './components/Awards';
import Legacy from './components/Legacy';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Quotes from './components/Quotes';
import Good from './components/Good';


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Good/>
      <Main />
      <Career />
      <Honours />
      <Awards />
      <Brands />
      <Quotes />
      <Legacy />
      <Footer />
    </div>
  );
}

export default App;
