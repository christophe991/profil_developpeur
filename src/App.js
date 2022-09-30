import React from 'react'
import './App.css';
import { BrowserRouter, Router, NavLink, Routes, Route }
  from 'react-router-dom';
import Accueil from './components/Accueil';
import Footer from './components/Footer';
import Header from './components/Header';
import Creation from './components/Creation'





function App() {
  return (
    <>
    <Header/>

     
      <BrowserRouter >
      <div className="bg-zinc-500">
      <div class=" p-5 flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 
      md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700" >
          <div >
          <NavLink to="/" className="text-white"  >
              Accueil
            </NavLink>
            
          </div>
          <div >
            <NavLink to="/creation" className="text-white" >
              Création
            </NavLink>
          </div>

        </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/creation" element={<Creation />} />

        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  );
}



export default App;
