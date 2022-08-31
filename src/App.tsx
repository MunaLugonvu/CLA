
import  Register from "./Components/Register";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Lesson from "./Components/Lesson";
import Blocks from "./Components/Blocks";
import Quiz from "./Components/Quiz";
import Profile from "./Components/Profile";
import {  Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <header> <Navigation/> </header>
    
    <Routes>
    <Route path="Register" element={<Register />}/>
    <Route path="Login" element={<Login />}/> 
    <Route path="Home" element={<Home />}/> 
    <Route path ="Lesson" element={<Lesson/>}/>
    <Route path="Blocks" element={<Blocks/>}/>
    <Route path="Quiz" element={<Quiz/>}/>
    <Route path="Profile" element={<Profile/>}/>
    </Routes>
   
     
  
    </>
   
  );
}

export default App;
