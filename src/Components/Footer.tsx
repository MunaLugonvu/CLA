import {Container, Col, Row} from 'react-bootstrap';
import {
    FaFacebookSquare,
    FaTwitter,
    FaLinkedin,
    FaInstagram
  } from 'react-icons/fa';

const Footer = () => {
    return(
        <div className="d-block d-md-flex align-items-center" style={{minHeight: "20px", backgroundColor: "black", color: "#fff", padding: "1rem"}}>
        <Container>
          <Row className="d-block d-md-flex">
          <Col>&copy;{` ${new Date().getFullYear()} CLA. All rights reserved.`}</Col>
          <Col className="d-flex justify-content-start justify-content-md-end">
            <div className="mr-4">
              <a target="_blank" style={{color: "#fff"}} rel="noopener noreferrer" href="#"><FaFacebookSquare /></a>
            </div>
            <div className="mr-4">
            <a target="_blank" style={{color: "#fff"}} rel="noopener noreferrer" href="#"><FaTwitter /></a>
            </div>
            <div className="mr-4">
            <a target="_blank" style={{color: "#fff"}} rel="noopener noreferrer" href="#"><FaLinkedin /></a>
            </div>
            <div className="">
            <a target="_blank" style={{color: "#fff"}} rel="noopener noreferrer" href="#"><FaInstagram /></a>
            </div>
          </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Footer;