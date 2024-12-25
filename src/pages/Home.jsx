import React from 'react'
import { Card } from 'react-bootstrap'
import Products from '../component/Products'
import img5 from "../assets/20180282.jpg";

const Home = () => {
  return (
    <div  >
  <Card className="bg-dark text-white position-relative  ">
      <Card.Img src={img5} alt="family" />
      <Card.ImgOverlay>
      <div className='bg-dark opacity-75 p-md-5  w-100  position-absolute top-0 bottom-0 start-0' >
        <Card.Title className='fs-sm-1 pt-md-5   ps-md-5 mt-md-5   ms-md-5'> welcome to our store</Card.Title>
        <Card.Text className='   px-md-5  mx-md-5'>
        welcome to our store ! discover awide range of high-quality products at competitive prices , all in one place. enjoy a seamless 
        shopping experience with fast delivery and exclusive deals
        </Card.Text>
      </div>
      </Card.ImgOverlay>
    </Card>   <br/>  <br/>  <br/>
    <Products/>
    </div>
  )
}


export default Home
