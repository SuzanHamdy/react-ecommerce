import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import img1 from "../assets/men.jpg";
import img2 from "../assets/images.jpeg";
import img3 from "../assets/images (1).jpeg";
import img4 from "../assets/download.jpeg";
const About = () => {

const aboutData =[
  {
  image : img1,
  title : "men's Clothing",
},
{
  image : img2,
  title : "women's Clothing",
},
{
  image : img3,
  title : "jewelery",
},
{
  image : img4,
  title : "electronics",
},

]





  return (
    <Container>
    <h2 className='p-md-3   m-md-3  text-center fs-1'>  about Us</h2> <hr/>
    <Container >
      <p className='px-5   m-3  text-center fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut fugit! Iure eos ipsum rerum, 
        cumque recusandae necessitatibus in. Hic tempore error in perspiciatis voluptate, consequatur incidunt 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut fugit! Iure eos ipsum rerum, 
        cumque recusandae necessitatibus in. Hic tempore error in perspiciatis voluptate, consequatur incidunt
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut fugit! Iure eos ipsum rerum, 
        cumque recusandae necessitatibus in. Hic tempore error in perspiciatis voluptate, consequatur incidunt
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aut fugit! Iure eos ipsum rerum, 
        cumque recusandae necessitatibus in. Hic tempore error in perspiciatis voluptate, consequatur incidunt
        dignissimos natus ullam!</p>

<div>
<h2 className='p-3   m-5  text-center fs-1'>  our Products</h2>
<Row>
{
  aboutData.map((cat , index)=>{
    return(
      <>
        <Col key={index}>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat.image} />
      <Card.Body className='text-center'>
        <Card.Title>{cat.title}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
      </>
    )
  })
}
  
</Row>

</div>







    </Container>
    </Container>
   
  )
}

export default About
