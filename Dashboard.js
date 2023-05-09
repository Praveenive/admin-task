import React from "react";
import Base from '../Base/Base';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function Dashboard() {
   
  return (
    <div >
      <Base>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>

      <h1>Dashboard</h1><hr/><br/>
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
      </Card></div><br/><br/>
      <div className="dash">
      <Card>
      <Card.Title>Earnings overview</Card.Title>
        <Card.Img variant="top" src="https://i0.wp.com/blog.investyadnya.in/wp-content/uploads/2018/08/pomis-interest-rates.png?resize=419%2C239&ssl=1" />
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Title>Revenue graph</Card.Title>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPhnfwUIdctvAhON9fYwZ22JWDsSITwCk2tJIfiB60P4cYrzIkuV7W6nNmH4dcJ0XviY&usqp=CAU" />
      
    </Card>
      
      </div><br/><br/>
      <div className="dash">
      <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>Projects</Card.Header>
        <Card.Body>
          <Card.Text>
           <p>Server Migration</p>
           <ProgressBar variant="success" now={20} />
           <p>Sales Tracking</p>
           <ProgressBar variant="info" now={20} />
           <p>Customer Database</p>
      <ProgressBar variant="warning" now={60} />
      <p>Payout Details</p>
      <ProgressBar variant="danger" now={80} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '25rem' }}>
        <Card.Header>Illustraion</Card.Header>
        <Card.Body>
          <Card.Text>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wuOHPBu1gz-XGIqNzwq54Xc2__yVgNBOig&usqp=CAU" />
          <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
         <a href="https://undraw.co/"> Browse features</a>
          </Card.Text>
        </Card.Body>
      </Card></div><br/> <br/>
  
     
     
    
     </ThemeProvider>;
      </Base>
      
    </div>
  );
}

export default Dashboard;