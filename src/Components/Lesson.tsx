
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

</>
  )
}

export default Lesson;