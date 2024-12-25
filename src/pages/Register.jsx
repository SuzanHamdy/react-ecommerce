import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate =useNavigate()
const [Input, setInput] = useState({
  userName :"",
  email :"",
  password :""
})
const handleSubmit =(e)=>{
  e.preventDefault();
  localStorage.setItem("user" , JSON.stringify(Input));
navigate("/login")

}


  return (
    <Container>
      <h2 className='p-3   m-3  text-center fs-1'> register</h2> <hr/>
      <Container >
      <Form className='w-75 m-auto' onSubmit={handleSubmit}   >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> full name</Form.Label>
        <Form.Control type="text" placeholder="enter your name" required 
        name='userName'
        value={Input.userName}
        onChange={(e)=>{setInput({ ...Input , [e.target.name]:e.target.value})}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"   required 
          name='email'
          value={Input.email}
          onChange={(e)=>{setInput({ ...Input , [e.target.name]:e.target.value})}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> password</Form.Label>
        <Form.Control type="password" placeholder="password"  required 
          name='password'
          value={Input.password}
          onChange={(e)=>{setInput({ ...Input , [e.target.name]:e.target.value})}}
        />
      </Form.Group>
<p>already has an account ? <Link  to ="/login" > login</Link></p>

<div className='d-flex   justify-content-center align-items-center'>
<Button className='px-3 fs-4  mb-5 ' type='submit'
          variant= "dark"> Register</Button>

</div>

      </Form>
      </Container>
    </Container>
  )
}

export default Register
