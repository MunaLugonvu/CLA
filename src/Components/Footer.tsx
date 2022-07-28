import {Container, Col, Row} from 'react-bootstrap';
import "./style.css"


const Footer = () => {
    return(
        <div className="d-block d-md-flex align-items-center footer-bg">
        <Container>
          <Row className="d-block d-md-flex">
          <Col>&copy;{` ${new Date().getFullYear()} CLA. All rights reserved.`}</Col>
          
          </Row>
        </Container>
      </div>
    )
}
export default Footer;