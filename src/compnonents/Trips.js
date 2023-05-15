import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Tripcss.css';
import img3 from '../images/firstcard.png';
import arrowr from '../images/arrowr.png';
const Trips = () =>{
return (
    <div className='cs'>
        <p className='als'>Dont miss these Round Trip Fares <button className='btals'> See More</button></p> 
         <Carousel className>
      <Carousel.Item className='csi'>
        <div className='view'>
      <Card className='cr' style={{ width: '35rem' }}>
      <Card.Img variant="top" src={img3} className='img-br' />
      <Card.Body>
        <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut'>
        <Button className='butbn' variant="primary">Book Now</Button>
        </div>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
      
      </Carousel.Item>
      
      <Carousel.Item className='csi'>
        <div className='view'>
      <Card className='cr' style={{ width: '35rem' }}>
      <Card.Img variant="top" src={img3} className='img-br' />
      <Card.Body>
        <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut'>
        <Button className='butbn' variant="primary">Book Now</Button>
        </div>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
      
      </Carousel.Item>
      
    </Carousel>
    </div>
)
}
export default Trips;