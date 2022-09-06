/* eslint-disable no-sequences */

import SideBar from "./SideBar";

import { Navbar, Nav, Container } from 'react-bootstrap';
import "./lesson.css";
import SideBar2 from "./SideBar2";




const Lesson = () => {

  

  return ( 
<>
<SideBar/>


<div className="ld-focus-content">
<div className="ld-tabs-navigation">
            <div className="ld-tab ld-active" data-tab="lesson">
                <span className="ld-icon id-icon-content"></span>
                <a className="ld-text" href="Lesson" style={{textDecoration: "none"}}>Learning Material</a>
            </div>
                                        <div className="ld-tab" data-tab="custom2"style={{display: "flex;"}} >
                    <span className="ld-icon id-icon-content"></span>
                    <a className="ld-text" href="Blocks" style={{textDecoration: "none"}}>Review Quiz</a>
                </div>
                                </div>

<div style={{ display: "flex", justifyContent: "center", height: "100%", marginTop:"5px" }}><h1 style={{color: "#172344"}}>Lesson One: Introduction to Arrays</h1></div>

<Container className="main-content"  style={{  justifyContent: "center",  marginTop:"5px", paddingLeft: "190px" }}>
  <br></br>
  <p>
  An array is a collection of data items, all of the same type, accessed using a common name
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

To create an array, define the data type (like int) and specify the name of the array followed by square brackets [].

To insert values to it, use a comma-separated list, inside curly braces: int myNumbers[]   = 

  </p>


 </Container>  
 <div className="ld-content-actions">

                    <div className="ld-content-action ld-empty">
                    <a className="ld-button  page-action prev ld-button-transparent" href="https://talktomeinkorean.com/curriculum/level-1-korean-grammar/lessons/l1l3/">
                    <span className="ld-text">Previous Lesson</span>
                </a>
                        </div>

                        <form className="sfwd-mark-incomplete" method="post" action="https://talktomeinkorean.com/wp-admin/admin-ajax.php?action=ttmik_mark_incomplete" >
                    <input type="hidden" value="672282" name="user_id"/>
                    <input type="hidden" value="2836" name="step_id"/>
                    <input type="hidden" value="5111" name="course_id"/>
                    <input type="hidden" value="https://talktomeinkorean.com/curriculum/level-1-korean-grammar/lessons/level-1-lesson-2/" name="next_url"/>
                    <input type="submit" className="mark_incomplete_button" value="Mark Complete"/>
                </form>
                    <div className="ld-content-action">
                            <a className="ld-button  page-action next ld-button-transparent" href="https://talktomeinkorean.com/curriculum/level-1-korean-grammar/lessons/level-1-lesson-2/">
                    <span className="ld-text">Next Lesson</span>
                </a>
                    </div>

        
    </div>
    </div>

</>
  )
}

export default Lesson;