
import {Button} from "react-bootstrap";

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
                Do not have an account? <a href="Register">Register Here</a>
               </div>             
               <div className='submit'>
                  <Button>Log In</Button>
               </div>
              
          </form>
      </div>
   </div>
     </>
  );
};
export default Login;