import pic from "./img/header-img.png";
import Footer from "./Footer";

import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import "./scss/theme/_home.scss"
import "./scss/theme/_reset.scss"
import "./scss/theme/_predefined.scss"
import "./css/nice-select.css";
import "./css/owl.carousel.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css" />



const Home = () => (
    <>
        <div className="banner-image">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col>
                        <h1 className="text-white banner-text">
                            Take the first step <br />
                            to learn C us
                        </h1>
                        <p className="mx-auto text-white  mt-20 mb-40">
                            Everything you need to learn C in one place
                        </p>
                    </Col>
                    <Col className="img-header">

                        <img src={pic} alt="header-img" />
                    </Col>
                </Row>
            </Container>

        </div>
        <section className="feature-area">

            <Container>
                <Row>
                    <Col className="col-lg-2 col-md-6">
                        <div className="feature-item d-flex">
                            <i className="ti-book"></i>
                            <div className="ml-20">
                                <h4>New Classes</h4>
                                <p>
                                    In the history of modern astronomy, there is probably no one greater leap forward.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-lg-2 col-md-6">
                        <div className="feature-item d-flex">
                            <i className="ti-cup"></i>
                            <div className="ml-20">
                                <h4>Top Courses</h4>
                                <p>
                                    In the history of modern astronomy, there is probably no one greater leap forward.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-lg-2 col-md-6">
                        <div className="feature-item d-flex border-right-0">
                            <i className="ti-desktop"></i>
                            <div className="ml-20">
                                <h4>Full E-Books</h4>
                                <p>
                                    In the history of modern astronomy, there is probably no one greater leap forward.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="other-feature-area">
            <div className="container">
                <div className="feature-inner row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>
                                Features That <br />
                                Can Avail By Everyone
                            </h2>
                           <div className="section-small-text">
                           
                           </div>
                                
                          
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="other-feature-item">
                            <i className="ti-key"></i>
                            <h4>Lifetime Access</h4>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                                    do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                                    amet consec tetur adipisicing elit, sed do eiusmod tempor
                                    incididunt labore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt--160">
                        <div className="other-feature-item">
                            <i className="ti-files"></i>
                            <h4>Source File Included</h4>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                                    do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                                    amet consec tetur adipisicing elit, sed do eiusmod tempor
                                    incididunt labore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt--260">
                        <div className="other-feature-item">
                            <i className="ti-medall-alt"></i>
                            <h4>Student Membership</h4>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed
                                    do eiusmod tempor incididunt labore. Lorem ipsum dolor sit
                                    amet consec tetur adipisicing elit, sed do eiusmod tempor
                                    incididunt labore.
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

      
<Footer/>


    </>

)
export default Home;