import React from 'react'
import Button from 'react-bootstrap/Button';


function Register() {
  return (
   
    <div className='login'>
  <div >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCzz5M3j_UXk34GfXo1BOSeIo77fgPApLng&usqp=CAU" alt="login"/>
      {" "} </div>
      <div >
       <input type="text" placeholder='First name'/>
      <input type="text" placeholder='Last name'/><br/><br/>
      <input type="text" placeholder='Email address'/><br/><br/>
      <input type="text" placeholder='Password'/><input type="text" placeholder='Repeat Password'/><br/><br/>
      <div className='but'><Button variant="primary" size="lg">
         Create Account
        </Button><hr/><p>or</p>
        <Button variant="danger" size="lg">
          Register with Google
        </Button>
        <Button variant="info" size="lg">
          Register with Facebook
        </Button></div>
      <a href="www.google.com">Forgot Password?</a><br/>
      <a href="www.google.com">Already Account! Login?</a>

      </div> </div>
 
  )
}

export default Register