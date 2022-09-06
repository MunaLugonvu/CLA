/* eslint-disable no-sequences */

import SideBar from "./SideBar";
import { Navbar, Nav, Container } from 'react-bootstrap';



const Lesson = () => {

  

  return ( 
<>
<SideBar/>
<Navbar style={{ display: "flex", justifyContent: "center", height: "100%", borderBottom: "2px solid #e2e7ed" }}>
<Nav.Link href="" >Learning Material</Nav.Link>
 <Nav.Link href="/Blocks">Code Puzzle</Nav.Link>
</Navbar>

<div style={{ display: "flex", justifyContent: "center", height: "100%", marginTop:"5px" }}><h1 style={{color: "#172344"}}>Lesson One: Introduction to Arrays</h1></div>

<Container  style={{  justifyContent: "center",  marginTop:"5px", paddingLeft: "190px" }}>
  <br></br>
An array is a collection of data items, all of the same type, accessed using a common name
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

To create an array, define the data type (like int) and specify the name of the array followed by square brackets [].

To insert values to it, use a comma-separated list, inside curly braces:

int myNumbers[]   = {<p>  25 50 75 100  </p>}; </Container>  

</>
  )
}

export default Lesson;