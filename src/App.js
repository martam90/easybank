import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Overlay from './components/Overlay';


const App = () => {
  return (
    <>
    <Overlay />
    <Header />
    <Main />
    <Footer />
  </>
  );
}

export default App;
