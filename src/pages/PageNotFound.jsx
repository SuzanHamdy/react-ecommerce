import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div  className=' text-center px-sm-5 mx-sm-5'>
      <h2 className='p-5  m-sm-5  text-center fs-1'>  Page Not Found</h2> 
      <Button className='w-50 text-center  mx-5'
                variant= "dark"
           
         
              onClick={() => navigate("/")}
            >
            
             Go To Home
            </Button>
   
    </div>
  )
}

export default PageNotFound
