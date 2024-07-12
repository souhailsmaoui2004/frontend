import { useState } from 'react'

import './App.css'
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Editarticle from "./components/articles/Editarticle";

import Listarticles from "./components/articles/Listarticles";
import Viewarticle from "./components/articles/Viewarticle";

import Editcategorie from "./components/categories/Editcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listcategories from "./components/categories/Listcategories";
import ViewCategorie from "./components/categories/ViewCategorie";

import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Listscategories from "./components/scategories/Listscategories";


import ViewScategorie from "./components/scategories/ViewScategorie";

import Menu from "./components/Menu";
import Listarticlescard from './components/client/Listarticlescard';
import Insertarticle from './components/articles/Insertarticle';




function App() {
  

  return (
    <>
      <div>

<Router>
<Menu/>
<Routes>
<Route path="/" exact element={<Listarticlescard/>}/>
<Route path="/articles" exact element={<Listarticles/>}/>
<Route path="/articles/add" element={<Insertarticle/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" exact element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<ViewCategorie/>}/>
<Route path="/scategories" exact element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<ViewScategorie/>}/>
<Route path="/Menu" exact element={<Menu/>}/>


</Routes>
</Router>


        
        
      </div>

      
      
    </>
  )
}

export default App
