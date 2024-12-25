import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export const Contact = () => {
  return (<>
   <h2 className='p-3   m-3  text-center fs-1'> Contact us </h2> <hr/>
   <Container className='px-sm-5 m-sm-5 w-75 '>
   <Form className='px-sm-5  mx-sm-5 '>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> name </Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Message </Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Enter Your Message" />
      
      </Form.Group>
      <div className='d-flex   justify-content-center align-items-center' >
      <Button className='w-50' variant="dark"> Send </Button>
      </div>
    </Form>
   </Container>

  </>
  )
}
