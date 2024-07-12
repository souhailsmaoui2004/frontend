import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cardarticle from './Cardarticle';

const Listarticlescard = () => {

    const [articles, setArticle] = useState([]);


    // useeffect= onload
    useEffect(() => {
    loadArticles();
    }, []);
    const loadArticles = async () => {
    // const res = await axios.get("https://ecommercebackend-rose.vercel.app/api/articles");
    // https://ecommercebackend-rose.vercel.app/api/articles
    const res = await axios.get("https://ecommercebackend-rose.vercel.app/api/articles");
    // console.log(res.data)
    setArticle(res.data);
    };

  return (
    <div className='container'>
        <div style ={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
      
      {
       articles.map((art,index)=>
        // <Cardarticle article={art}/>
       <Cardarticle
        image={art.imageart}
        des={art.designation}
        reference={art.reference}
        prix={art.prix}
       
       />
    )

      }
          </div>
          </div>
  )
}

export default Listarticlescard
