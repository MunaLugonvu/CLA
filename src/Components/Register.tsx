import React from "react";
import './style.css';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "react-bootstrap";


type UserSubmitForm = {
   fullname: string;
   email: string;
   password: string;
   confirmPassword: string;

};


const Register: React.FC = () => {
   const userSchema = Yup.object().shape({
      fullname: Yup.string().required('required'),
      email: Yup.string().email().required(),
      password: Yup.string().required('Password is required')
         .min(6, 'Password must be at least 6 characters')
         .max(40, 'Password must not exceed 40 characters'),
      confirmPassword: Yup.string().required('This is required').oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
   });

   const { register, handleSubmit, formState: { errors }
   } = useForm<UserSubmitForm>({
      resolver: yupResolver(userSchema)
   });

   const onSubmit = (data: UserSubmitForm) => {
      console.log(JSON.stringify(data, null, 2));
   }


   return (
      <>
         <div className='wrapper'>
            <div className='form-wrapper'>
               <h1>Register</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='fullName'>
                     <label htmlFor="fullName">Full Name</label>
                     <input
                        type="text"{...register('fullname')}
                        className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                     />
                     <div className="invalid-feedback">{errors.fullname?.message}</div>
                  </div>
                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input
                        type="text"
                        {...register('email')}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                     />
                     <div className="invalid-feedback">{errors.email?.message}</div>
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                     />
                     <div className="invalid-feedback">{errors.password?.message}</div>
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Confirm Password</label>
                     <input type="password"{...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''
                        }`} />
                     <div className="invalid-feedback">
                        {errors.confirmPassword?.message}
                     </div>

                  </div>
                  <div className='submit'>
                     <Button type="submit" >Register Me</Button>
                  </div>
                  <p className="text-left">
              Already have an account?{' '}
              <a href="Login">Login</a>
            </p>
           
               </form>
            </div>
         </div>
       
      </>
   );
};
export default Register;