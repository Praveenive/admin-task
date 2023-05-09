import React from 'react'
import Button from 'react-bootstrap/Button';


function Login() {
  return (
   
  <div className='login'>
  <div >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQVm20UqLpQ_OFQY0UOqpe-trDXOuChU5WQ&usqp=CAU"></img>
      {" "} </div>
      <div >
       <input type="text" placeholder='enter Email address'/><br/>
      <input type="text" placeholder='enter Password'/><br/><br/>
      <div className='but'><Button variant="primary" size="lg">
          Login
        </Button><hr/><p>or</p>
        <Button variant="danger" size="lg">
          Login with Google
        </Button>
        <Button variant="info" size="lg">
          Login with Facebook
        </Button></div>
      <a href="www.google.com">Forgot Password?</a><br/>
      <a href="www.google.com">Create Account!</a>

      </div> </div>
    

    
 
  )
}

export default Login