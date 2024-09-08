import { PureComponent ,React} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Authlogin.css';
import { loginapi } from "../../Config/endpoint";
import { backend_api_url } from "../../Config/Config";
import LoginImage from '../../Assests/Images/Login.jpg';
export class Authlogin extends PureComponent{
  
    apifetch(elements){
      try{
        fetch(backend_api_url+loginapi, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: elements.fullname,
              password: elements.password,
              email: elements.email,
              expiresInMins: 30, // optional, defaults to 60
            })
          })

          .then(res => res.json())
          .then(data => {
            console.log(data);
            debugger; // Log the data for debugging purposes
            // localStorage.setItem('loginResponse', data);
            if(data.message !=='Invalid credentials'){
              alert('login success')
            localStorage.setItem('token',data.token);
            localStorage.setItem('refreshToken',data.refreshToken);
            localStorage.setItem('FullName',data.firstName + ''+ data.lastName);
            localStorage.setItem('Username',data.username);
            localStorage.setItem('email',data.email);
            localStorage.setItem('UserId',data.id);
            localStorage.setItem('Usergender',data.gender);
            localStorage.setItem('UserImg',data.image);
                window.location.href='/dashboard'
                // this.Dashboard.current.click()
            }else{
              alert(data.message)
            }   
        })
      }
      catch(err){
        console.log(err)
      }
          // .then(console.log);
    }

    setRedirect() {
      this.setState({
        redirect: true
      });
    }
    render(){
        return (
    
            <Formik className='' initialValues={{ fullname: "", email: "", password: "" }}
            validate={(values) => {
                const errors = {};
                if (!values.fullname) {
                  errors.fullname = "Enter your name";
                }
     
                if (!values.email) {
                  errors.email = "Enter your email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "Enter your password";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  this.apifetch(values)
                  setSubmitting(false);
                }, 400);
              }}
>
{({ isSubmitting }) => (
         <div className="d-flex h-100">
            {/* <Link ref={this.Dashboard} to='/dashboard' className="">Dashboard</Link> */}
           <Form className='justify-content-center col-sm-12 col-md-12 col-xl-5 col-xxl-5 p-5 text-left d-flex flex-column'>
            <div>
              <h3 className="text-primary">JORA</h3>
               <p className="fw-bold text-dark-emphasis">User please login now</p>
            </div>
            <div className='form-group text-left mt-3'>
            <label className='form-label label-left w-100'>Username</label>
             <Field className="form-control "
               type="text"
               name="fullname"
               placeholder="Enter your username"
             />
             <ErrorMessage name="fullname" component="div" />
              </div>

              <div className='form-group mt-3'>
              <label className='form-label label-left w-100'>Email</label>
             <Field className="form-control"
               type="email"
               name="email"
               placeholder="Enter email address"
             />
             <ErrorMessage name="email" component="div" />
             </div>   

                <div className='form-group mt-3'> 
                <label className='form-label label-left w-100'>Password</label>       
             <Field type="password" name="password" className="form-control"
             placeholder='********' />
             <ErrorMessage name="password" component="div" />
             </div>
             <div className="d-flex justify-content-between pt-3">
               <div className="d-flex">
               <Field type="checkbox" name="Rember" className=" form-check-input" />
               <label className='ms-2 form-label label-left w-100'>Rember me</label>
               </div>

               <div className="d-flex">
               <label className='form-label text-primary'>Forget Password?</label>
               </div>
             </div>
             <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>
               Login
             </button>
           </Form>
           <div className="col-sm-0 col-md-0 col-xl-7 col-xxl-7  h-100">
            <img src={LoginImage} className="w-100 h-100" alt='login-poster'/>
           </div>
           </div>
         )}
</Formik>
        );
    }
}

// export default withRouter(Authlogin)