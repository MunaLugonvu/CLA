/* eslint-disable jsx-a11y/anchor-is-valid */

import "./prof.css"
import { FaRegUserCircle, FaRegArrowAltCircleDown } from "react-icons/fa";
import "./theme.css"
import { Col, Row,ListGroup , ProgressBar, } from "react-bootstrap";
import "./learningcenter.css"
const LearningCenter = () => {
    return (
        <>

            <Row style={{ padding: "20px" }} >


                <Col style={{ display: "flex" }} >
                    <div className="col-inner" style={{ width: "50", }}>

                        <div className="card account-user">
                            <div className="image mr-half inline-block circle">
                                <div ><FaRegUserCircle size={40} style={{ color: "grey" }} /></div>
                                <div className="user-meta">
                                    Muna Lugonvu
                                </div>
                                <a href="EditProfile">Edit Profile</a>
                            </div>
                        </div>
                    </div>
                    <div id="col-1561834122" className="col pb-0 medium-8 small-12 large-8">
                        <div className="col-inner">


                            <div className="card statuses">
                                <div className="user-statuses">
                                    <h2>You are a <strong className="Basic">Beginner</strong></h2>

                                </div>
                                <div className="state-detail">
                                    <p>Based on your level test score, you are at the <strong><a href="#">Beginner Level</a>.</strong></p><p>We recommend that you start here.</p>
                                </div>
                                <div className="recommend"><a className="button-recommend" href="#">Lesson 1 : Introduction</a></div>
                            </div>
                        </div>
                    </div>
                </Col></Row>
            <div style={{ textAlign: "center",paddingLeft: "20px" }}>
            <h3 style={{ borderBottom: "solid 4px #030d51",backgroundColor:"#030d51", color:"#ffffff", display: "inline-flex"}}>Topics & Lessons</h3> </div>
          
            <ListGroup  style={{ paddingRight: "20px",paddingLeft: "10px", marginLeft: "10px", textAlign: "center", paddingTop: "15px"}}>
      <ListGroup.Item>Topic One <FaRegArrowAltCircleDown size={15}  style={{color: "black", marginLeft: "5px" }} /> </ListGroup.Item>
      <ListGroup.Item>Topic Two<FaRegArrowAltCircleDown size={15}  style={{color: "black",marginLeft: "5px" }} /></ListGroup.Item>
      <ListGroup.Item>Topic Three<FaRegArrowAltCircleDown size={15}  style={{color: "black", marginLeft: "5px" }} /></ListGroup.Item>
      <ListGroup.Item>Topic Four<FaRegArrowAltCircleDown size={15}  style={{color: "black", marginLeft: "5px" }} /></ListGroup.Item>

     
    </ListGroup>
                   
            





            </>

            )
}
            export default LearningCenter;