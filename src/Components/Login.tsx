
import {Button} from "react-bootstrap";
import Footer from "./Footer";

const Login = () => {
 

  return (
    <>
     <div className='wrapper'>
         <div className='form-wrapper'>
            <h1>Login</h1>
            <form >
               <div className='email'>
                  <label htmlFor="email">Email</label>
                  <input type='email' name='email'/>
               </div>
               <div className='password'>
                  <label htmlFor="password">Password</label>
                  <input type='password' name='password' />
               </div> 
               <div>
                Do not have an account? <a href="Register" style= {{color: "#35509a"}}>Register Here</a>
               </div>             
               <div className='submit' >
                  <Button style={{backgroundColor: "#35509a"}}>Log In</Button>
               </div>
              
          </form>
      </div>
   </div>
   <Footer/>
     </>
  );
};
export default Login;