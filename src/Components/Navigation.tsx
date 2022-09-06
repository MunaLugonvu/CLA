import { Container,  Nav, Navbar } from 'react-bootstrap';
import "./style.css";




const Navigation = () => {
    return(
      <>
      <Navbar  className='nav-bar'>
        <Container >
          <Navbar.Brand href="Home">CLA</Navbar.Brand>
         
          <Nav className="justify-content-end">
            <Nav.Link href="Lesson">Lessons</Nav.Link>
            <Nav.Link href ="LearningCenter">My Learning Center</Nav.Link>
            <Nav.Link href="Register">Register</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
      </>
    )
}
export default Navigation;