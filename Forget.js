import React from 'react'
import Button from 'react-bootstrap/Button';

function Forget() {
  return (
    <div className='login'>
  <div >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQVm20UqLpQ_OFQY0UOqpe-trDXOuChU5WQ&usqp=CAU"></img>
      {" "} </div>
      <div >
        <h1>Forgot Password?</h1>
        <p>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
       <input type="text" placeholder='enter Email address'/><br/><br/>
     
      <div className='but'><Button variant="primary" size="lg">
       Reset Password
        </Button><hr/>
        </div>
      <a href="www.google.com">Forgot Password?</a><br/>
      <a href="www.google.com">Create Account!</a>

      </div> </div>
  )
}

export default Forget