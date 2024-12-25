import { Rating, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
import toast, { Toaster } from 'react-hot-toast';



const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = () => toast.success('Add To Cart.');
  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  const logged =localStorage.getItem("logged");

const Send =(e)=>{
dispatch(addToCart(e))
}





  const Loading = () => {
    return <Row className=" justify-content-center align-items-center my-5 py-5 gap-1 flex-wrap-wrap">
      <Col>
      <Skeleton variant="rectangular" width={210} height={218} />
      <Skeleton width="50%" />
      <Skeleton width="70%" />
      <Skeleton width="30%" />
      <Skeleton width="70%" />
      </Col>
      <Col>
      <Skeleton variant="rectangular" width={210} height={218} />
      <Skeleton width="50%" />
      <Skeleton width="70%" />
      <Skeleton width="30%" />
      <Skeleton width="70%" />
      </Col>
      <Col>
      <Skeleton variant="rectangular" width={210} height={218} />
      <Skeleton width="50%" />
      <Skeleton width="70%" />
      <Skeleton width="30%" />
      <Skeleton width="70%" />
      </Col>
      <Col>
      <Skeleton variant="rectangular" width={210} height={218} />
      <Skeleton width="50%" />
      <Skeleton width="70%" />
      <Skeleton width="30%" />
      <Skeleton width="70%" />
      </Col>
    </Row>;
  };

  const filterProducts = (category) => {
    setFilter(category);
  };

  const ShowProduct = () => {
    const filteredData =
      filter === "all"
        ? data
        : data.filter((product) => product.category === filter);

    return (
      <>
        <h2 className="p-3 m-3 text-center fs-1">Latest Products</h2>
        <hr />
        <Container className=" row my-5 py-5 gap-md-4 gap-1 flex-wrap-wrap">
          
          <Button className=" col " variant="outline-dark" onClick={() => filterProducts("all")}>
            All
          </Button>
          <Button className=" col"
            variant="outline-dark"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button className=" col"
            variant="outline-dark"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button className=" col"
            variant="outline-dark"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelry
          </Button>
          <Button className=" col"
            variant="outline-dark"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </Button>
        </Container>
        <Row>
          {filteredData.map((product) => (
            <Col key={product.id} sm={6}  lg={4} className="mb-4 flex-wrap-wrap h-100  text-center">
              <Card>
              <Badge bg="warning" text="dark" className="w-25">{product.rating.count/10}% </Badge>
                <Card.Img variant="top" src={product.image} width={200} height={230} />
       
                <Card.Body>
                  <Card.Title>{product.title.substring(0 , 10)}</Card.Title>
                  <Card.Text>{product.description.substring(0 ,85)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush fw-bolder ">
                  <ListGroup.Item>${product.price}</ListGroup.Item>
                  <ListGroup.Item>   <Rating  name="simple-controlled"  value={product.rating.rate} /></ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-flex justify-content-center align-items-center" >
                  <Button variant="dark" onClick={()=>{
  if (logged) {
    Navigate(`/products/${product.id}`)
  } else {
    alert("Please login to add products to your cart.");
  }
}} >Buy Now</Button>
                  <Button variant="dark" className="ms-2"  onClick={()=> { if (logged) {
                    Send(product);
                   notify()
                  } else {
                    alert("Please login to add products to your cart.");
                  }}}>
                   add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return <Container>{loading ? <Loading /> : <ShowProduct />}

<Toaster 
gutter={-24}
  position="top-right"
  toastOptions={{
   
    style: {
      border: '1px solid green',
      padding: '12px 46px',
      color: 'green',
      fontSize:"25px",
      backgroundColor:"black",
      marginTop:"50px"
    },
  }}
/>
  </Container>;
};

export default Products;
