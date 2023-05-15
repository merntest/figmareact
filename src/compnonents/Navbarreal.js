import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbarcss.css';
import logowhite from '../images/logowhite.png';


const Navbarreal = () => {
  return (
    <Navbar id='bg-nb'>
      <Container>
    
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Navbar >
        <Container>
    
          <Nav className="me-auto" id='navbar-bg'>
            <Nav.Link className='navlink' href="#home"><h1 className='linktext'>Flights</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#features"><h1 className='linktext'>Offers</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Blog</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Community</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Contact</h1></Nav.Link>
            <img src={logowhite} width='70' height='70'/>
          </Nav>
        </Container>
      </Navbar>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default Navbarreal;