import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Allsongs from './compontents/Allsongs';
import { CartProvider } from 'react-use-cart';
import Login from './compontents/Login';
import Play from './compontents/Play';
import Folk from './compontents/Folk';
import Melody from './compontents/Melody';
import Rap from './compontents/Rap';
import Pop from './compontents/Pop';
import Artist from './compontents/Artist';
import U1 from './compontents/Artists/U1';
import A from './compontents/Artists/A';
import Ar from './compontents/Artists/Ar';
import Gv from './compontents/Artists/Gv';
import Eminem from './compontents/Artists/Eminem';
import Justin from './compontents/Artists/Justin';
import Signup from './compontents/Signup';
function App() {
  return <>


<CartProvider>
     
        <Routes>
          <Route path='/artist' element={<Artist/>}>
          <Route path='A' element={<A/>}/>
          <Route path="Ar" element={<Ar/>}/>
          <Route path="u1" element={<U1/>}/>
          <Route path="Eminem" element={<Eminem/>}/>
          <Route path="justin" element={<Justin/>}/>
          <Route path="Gv" element={<Gv/>}/>
          </Route>
          <Route path='/folk' element={<Folk/>}/>
          <Route path="/melody" element={<Melody/>}/>
          <Route path="/rap" element={<Rap/>}/>
          <Route path="/pop" element={<Pop/>}/>
          <Route path='/Songs' element={
        <Allsongs />}/>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
        <Route path='/playlist' element={
        <Play/>}/>
        
        </Routes>
        
      
    
  </CartProvider>
  
  </>
}

export default App;
