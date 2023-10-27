import React from 'react';
import ReactDOM from 'react-dom/client';


import Header from './components/screens/header';
import Main from "./components/screens/main";
import Footer from './components/screens/footer'


import './assets/styles/main.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

      <Main />

    <Footer />
  </React.StrictMode>
);

