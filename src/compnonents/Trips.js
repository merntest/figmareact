import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Tripcss.css';
const Trips = () =>{
return (
    <div className='cs'>
        <p className='als'>Dont miss these Round Trip Fares <button className='btals'> See More</button></p> 
         <Carousel className>
      <Carousel.Item className='csi'>
      <Card style={{ width: '30rem' , height:'35rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
      </Carousel.Item>
      
      <Carousel.Item className='csi'>
      <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       
      </Carousel.Item>
      
    </Carousel>
    </div>
)
}
export default Trips;