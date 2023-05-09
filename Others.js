import React from 'react'
import Base from '../Base/Base'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Others() {
  return (
    <Base>
    <h1>Other Utilities</h1><hr/>
    <p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework</p>
   <div className='line'>
    <Card>
      <Card.Header as="h5">Overflow Hidden Utilty</Card.Header>
      <Card.Body>
        <Card.Text>
        This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example
        </Card.Text>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header as="h5">Progress bar Utilty</Card.Header>
      <Card.Body>
        <Card.Text>
        <ProgressBar now={70} /><br/>
        <ProgressBar now={30} /><br/>
        <ProgressBar now={90} /><br/>
        <ProgressBar now={50} /><br/>
        <ProgressBar now={65} /><br/>
        This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example
        </Card.Text>
      </Card.Body>
    </Card></div>
    <p> default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework</p>
    </Base>
  )
}

export default Others