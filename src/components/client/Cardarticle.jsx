import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cardarticle = ({image,reference,des,prix}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{reference}</Card.Title>
      <Card.Text>{des.substr(0,20)}
     
      </Card.Text>
      <Card.Text>{prix} TND
     
     </Card.Text>
      <Button size='small' variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Cardarticle
