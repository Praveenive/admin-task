import React from "react";
import Base from '../Base/Base';
import Card from 'react-bootstrap/Card';


function Cards(){
    return(
        <Base>


    <h1>Cards</h1>
    <div className="dash">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>EARNINGS (MONTHLY)</Card.Title>
        <Card.Title>$ 40,000</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title >EARNINGS (Annualy)</Card.Title>
        <Card.Title>$ 215,000</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Tasks</Card.Title>
        <Card.Title>50%</Card.Title>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Pending Tasks</Card.Title>
        <Card.Title>18</Card.Title>
      </Card.Body>
      </Card></div>
      <div className="dash">
      <Card>
      <Card.Header as="h5">Default Card Example</Card.Header>
      <Card.Body>
        <Card.Text>
        This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header as="h5">Dropdown Card Example</Card.Header>
      <Card.Body>
        <Card.Text>
        Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="dash">
    <Card>
      <Card.Header as="h5">Basic Card Example</Card.Header>
      <Card.Body>
        <Card.Text>
        The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header as="h5">Collapse Card Example</Card.Header>
      <Card.Body>
        <Card.Text>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!
        </Card.Text>
      </Card.Body>
    </Card>

    </div>

</Base>
    )
}
export default Cards;