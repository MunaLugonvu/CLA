/* eslint-disable no-sequences */

import SideBar from "./SideBar";
import { Navbar, Nav } from 'react-bootstrap';



const Lesson = () => {

  

  return ( 
<>
<SideBar/>
<Navbar style={{ display: "flex", justifyContent: "center", height: "100%" }}>
<Nav.Link href="" >Learning Material</Nav.Link>
 <Nav.Link href="/Blocks">Code Puzzle</Nav.Link>
</Navbar>

<div style={{ display: "flex", justifyContent: "center", height: "100%" }}><h1>Lesson One: Introduction to Arrays</h1></div>
<div> Arrays
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

To create an array, define the data type (like int) and specify the name of the array followed by square brackets [].

To insert values to it, use a comma-separated list, inside curly braces:

int myNumbers[]   = {<p>  25 50 75 100  </p>};  </div>

</>
  )
}

export default Lesson;