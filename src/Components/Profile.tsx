/* eslint-disable jsx-a11y/anchor-is-valid */

import "./prof.css"
import { FaRegUserCircle} from "react-icons/fa";
import "./ttmik-theme.css"
import { Col, Row } from "react-bootstrap"
const Profile = () => {
    return (
        <>
        
                            <Row style={{ padding: "20px" }} >

                           
                                <Col style={{ display: "flex" }} >
                                    <div className="col-inner"style={{ width: "50", }}>

                                        <div className="card account-user">
                                            <div className="image mr-half inline-block circle">
                                            <div ><FaRegUserCircle size={40} style = {{color: "grey"}} /></div>
                                                <div className="user-meta">
                                                    Muna Lugonvu
                                                </div>
                                                <a href="/editProfile">Edit Profile</a>
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
                                <div style = {{textAlign: "center"}}> Lessons</div>
                      
          

        </>

    )
}
export default Profile;