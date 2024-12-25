
import {  Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
import Marquee from "../component/Marquee";
const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
const {id} = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const products = await response.json();
        setData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  const Send =(e)=>{
    dispatch(addToCart(e))
    }
    



 const Loading = () => {
    return (
      < Row className="container justify-content-center align-items-center m-sm-5 py-5 flex-wrap-wrap w-75">
      <Col>
      <Skeleton variant="rectangular" width={410} height={418} />
     
      </Col>
      <Col>
      <Skeleton width="50%" />
      <Skeleton width="30%" />
      <Skeleton variant="rectangular" width="100%" height={218} />
      <Skeleton width="70%"  height={118} />
     
      </Col>
    </ Row>
    )
  };

const ShowProduct=()=>{
return(
  <>
  <Container fluid="md">
<Card  className="my-5 w-100 ms-lg-5" >
<Row>
    <Col       md={4}>
       <Card.Img variant="top" src={data.image}  height={450}  />
    </Col>
    <Col >
       <Card.Body className="m-5  px-5 fs-5" >
          <Card.Title className=" fw-bolder">{data.title}</Card.Title>
                      <Card.Text>{data.description}</Card.Text> 
                      <ListGroup className="list-group-flush fw-bolder">
                  <ListGroup.Item>${data.price}</ListGroup.Item>
          
                </ListGroup>
                <br/>
                         <Button variant="outline-dark" onClick={()=>{Send(data) }} >  Add to cart</Button>
                         <Button variant="dark" className="ms-2" onClick={()=>{Navigate(`/cart`) }}>
                         Go to cart
                         </Button>
                       </Card.Body>

    </Col>
    </Row>
</Card >
</Container>
  </>
)
}

  return (
 <Container>{loading ? <Loading /> : <ShowProduct />}
 <Marquee/>
  </Container>
  )
}

export default Details
