import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ThemeProvider from 'react-bootstrap/ThemeProvider';








function Base({children}) {
  const history = useHistory()
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs">
    <div className="main-content">
      <div className="left-content">
        
      <h1 className="head">SB ADMIN 2</h1><hr/>
        <Button id="bg-vertical-dropdown-3" onClick={()=>history.push("/")}>Dashboard</Button><hr/>

        <h6>Interface</h6>
      <DropdownButton
        as={ButtonGroup}
        title="Components"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1" onClick={()=>history.push("/buttons")}>Buttons</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={()=>history.push("/cards")}>Cards</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="Utitiles"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1" onClick={()=>history.push("/colors")}>Colors</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={()=>history.push("/borders")}>Borders</Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={()=>history.push("/animations")}>Animations</Dropdown.Item>
        <Dropdown.Item eventKey="4" onClick={()=>history.push("/others")}>Others</Dropdown.Item>
      </DropdownButton>
    <hr/>
    <h6>Addons</h6>
    <DropdownButton
        as={ButtonGroup}
        title="Pages"
        id="bg-vertical-dropdown-3"
      ><p>Loginscreens</p>
        <Dropdown.Item eventKey="1" onClick={()=>history.push("/login")}>Login</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={()=>history.push("/register")}>Register</Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={()=>history.push("/forget")}>Forget password</Dropdown.Item>
       <br/> <p>Other pages</p>
        <Dropdown.Item eventKey="4" onClick={()=>history.push("/error")}>404 Page</Dropdown.Item>
        <Dropdown.Item eventKey="5" onClick={()=>history.push("/blank")}>Blank page</Dropdown.Item>
      </DropdownButton>
      <Button id="bg-vertical-dropdown-3" onClick={()=>history.push("/charts")}>Charts</Button>
      <Button id="bg-vertical-dropdown-3" onClick={()=>history.push("/tables")}>Tables</Button>
    
      </div>
      <div className="right-content"> 
      <div className="top">
        <input type="search" placeholder="search for..."/>
        <hr/>
        </div>  
       {children}
        <p className="copy">Copyright © Praveen Website 2023</p>
      </div>
</div>
</ThemeProvider>
   
    
  )
}

export default Base;
