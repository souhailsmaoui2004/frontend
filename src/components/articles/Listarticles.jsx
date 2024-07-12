import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Affichearticle from "./Affichearticle";
const Listarticles = () => {
const [articles, setArticle] = useState([]);


// useeffect= onload
useEffect(() => {
loadArticles();
}, []);
const loadArticles = async () => {
// const res = await axios.get("https://ecommercebackend-rose.vercel.app/api/articles");
// https://ecommercebackend-rose.vercel.app/api/articles
const res = await axios.get("https://ecommercebackend-rose.vercel.app/api/articles");
console.log(res.data)
setArticle(res.data);
};
const handleDelete = async (id) => {
   try {
    if(window.confirm("confirmer la suppression"))
        {
            await axios.delete(`https://ecommercebackend-rose.vercel.app/api/articles/${id}`)
            .then(res=>loadArticles())

        }
     
   
    
   } catch (error) {
   console.log(error)
}
}



return (
<div className="container">
    <Affichearticle articles={articles} handleDelete={handleDelete}/>
   


</div>
)
}
export default Listarticles
