
import React, { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
import Marquee from "react-fast-marquee";


const  MarqueeData = () => {
  const [data, setData] = useState([]);

 
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    const getProduct = async () => {
      try {
     
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setData(products);
       
      } catch (error) {
        console.error("Error fetching products:", error);
    
      }
    };
    getProduct();
  }, []);



const Send =(e)=>{
dispatch(addToCart(e))
}





  


  const ShowProduct = () => {
   
  

    return (
      <>
        <h2 className="p-3 m-5 fs-1"> you may also like </h2>

       
        <Marquee>
          {data.map((product) => (
         
              <Card key={product.id} width={250} className="mb-4 flex-wrap-wrap h-100 mx-2 text-center">
             
                <Card.Img variant="top" src={product.image} width={250} height={230} />
       
                <Card.Body>
                  <Card.Title>{product.title.substring(0 , 10)}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush fw-bolder ">
                  <ListGroup.Item>${product.price}</ListGroup.Item>
                  
                </ListGroup>
                <Card.Body className="d-flex justify-content-center align-items-center" >
                  <Button variant="dark" onClick={()=>{
    Navigate(`/products/${product.id}`)} }>Buy Now</Button>
                  <Button variant="dark" className="ms-2"  onClick={()=> { 
                    Send(product)
  }}>
                   add to cart
                  </Button>
                </Card.Body>
              </Card>
         
          ))}
      </Marquee>
      </>
    );
  };

  return <Container><ShowProduct /></Container>;
};

export default  MarqueeData;
