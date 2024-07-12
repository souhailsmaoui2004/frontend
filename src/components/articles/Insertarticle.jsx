import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const Insertarticles = () => {
  let navigate = useNavigate();
  
  const [article, setArticle] = useState({})
  const [scategories, setScategories] = useState([])

  const onSubmit = async (e) => {
    console.log(article)
    e.preventDefault();
    try {
      await axios.post("https://ecommercebackend-rose.vercel.app/api/articles", article)
    
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    loadscategories()
  }, [])
  const loadscategories = async () => {
    try {
      await axios.get("https://ecommercebackend-rose.vercel.app/api/scategories")
        .then(res => {
          setScategories(res.data);
          console.log(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <h4 align="center">Ajout Article</h4>
          <div className='form mt-3'>
            <Form className="border p-3" >
              <Row className="mb-2">
                <Form.Group as={Col} md="6" >
                  <Form.Label >Référence *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Référence"
                    value={article.reference}
                    onChange={(e) => setArticle({...article,reference:e.target.value})}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Désignation *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Désignation"
                    value={article.designation}
                    onChange={(e) => setArticle({...article, designation:e.target.value})}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group className="col-md-6">
                  <Form.Label>Marque *</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Marque"
                    value={article.marque}
                    onChange={(e) => setArticle({...article,marque:e.target.value})}
                  />

                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Prix"
                    value={article.prix}
                    onChange={(e) => setArticle({...article, prix:e.target.value})}
                  />

                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="col-md-6 ">
                  <Form.Label>
                    Qté stock<span className="req-tag">*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    value={article.qtestock}
                    onChange={(e) => setArticle({...article, qtestock:e.target.value})}
                    placeholder="Qté stock"
                  />

                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image"
                    value={article.imageart}
                    onChange={(e) => setArticle({...article, imageart:e.target.value})} />
                </Form.Group>
                <Form.Group as={Col} md="12">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    as="select"
                    type="select"
                    value={article.scategorieID}
                    onChange={(e) => setArticle({...article, scategorieID:e.target.value})}
                  >
                    {scategories.map((scat, index) =>
                      <option key={index} value={scat._id}>{scat.nomscategorie}</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Row>
              <button  className="btn btn-outline-primary" onClick={(e)=>onSubmit(e)}>
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/listarticles">
                Cancel
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Insertarticles