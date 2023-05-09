import React from "react";
import Base from '../Base/Base';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Buttons() {
  return (
    <div >
      <Base>
      <h1>Buttons</h1><hr/>
      <div className="container">
      <ButtonGroup vertical>
      <Button variant="success">Button</Button>
      <Button variant="danger">Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-1"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>

      <Button variant="info">Button</Button>
      <Button variant="dark">Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-2"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
       
        <div className="buttonsss">
        <div className="left">
            <Card><hr/>
          <Card.Header><h3>Circle Buttons</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
        </Card.Text>
        <p>btn-circle</p>
        
      </Card.Body>
    </Card>
        </div>
        <div className="right">
        <Card>
          <Card.Header><h3>Split Buttons with Icon</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
        </Card.Text>
        <p>btn-circle</p>
        
      </Card.Body>
    </Card>
        </div>
        </div>
      </div>
      
      </Base>
      
    </div>
  );
}

export default Buttons;