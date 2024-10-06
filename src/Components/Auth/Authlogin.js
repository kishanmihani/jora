import React, { useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Authlogin.css';
import { loginapi } from "../../Config/endpoint";
import { backend_api_url } from "../../Config/Config";
import LoginImage from '../../Assests/Images/Login.jpg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Authlogin(){
  const navigate = useNavigate();
  const UserInfo=[
    {"userName":localStorage.getItem('Username'),"userImg":localStorage.getItem('UserImg')}
  ]
  const CheckUserInfo=UserInfo[0].userImg !== (null) && UserInfo[0].userName !== null  ;
  useEffect(() => {
   if(CheckUserInfo){
    navigate('/dashboard') 
   }
   else{
    navigate('')
   }
  },[CheckUserInfo])
  const apifetch =async  (values) => {
    try {
      const response = await fetch(backend_api_url + loginapi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: values.fullname,
          password: values.password,
          email: values.email,
          expiresInMins: 30,
        })
      });

      const data =await response.json();
       (data.message !== 'Invalid credentials') ? datanotInvalid(data):Invalid_alert(data);
      
    } catch (err) {
      console.log(err);
    }
  };

  function Invalid_alert(data){
    toast.warn(data.message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;
  }
  function Success_alert(){
    toast.success('Login Success', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
 const  datanotInvalid =(data)=>{
    Success_alert()
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('FullName', data.firstName + ' ' + data.lastName);
    localStorage.setItem('Username', data.username);
    localStorage.setItem('email', data.email);
    localStorage.setItem('UserId', data.id);
    localStorage.setItem('Usergender', data.gender);
    localStorage.setItem('UserImg', data.image);
    navigate('/dashboard');
  }
  return (
    <Formik
      initialValues={{ fullname: "", email: "", password: "" }}
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
          apifetch(values);
          setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <div className="d-flex h-100">
          <Form className='justify-content-center col-sm-12 col-md-12 col-xl-5 col-xxl-5 p-5 text-left d-flex flex-column'>
            <div>
              <h3 className="text-primary">JORA</h3>
              <p className="fw-bold text-dark-emphasis">User please login now</p>
            </div>
            <div className='form-group text-left mt-3'>
              <label className='form-label label-left w-100'>Username</label>
              <Field className="form-control" autoFocus={true} type="text"  name="fullname" placeholder="Enter your username" />
              <ErrorMessage name="fullname"  className="text-danger text-start" component="div" />
            </div>

            <div className='form-group mt-3'>
              <label className='form-label label-left w-100'>Email</label>
              <Field className="form-control" type="email" name="email" placeholder="Enter email address" />
              <ErrorMessage name="email"  className="text-danger text-start" component="div" />
            </div>

            <div className='form-group mt-3'>
              <label className='form-label label-left w-100'>Password</label>
              <Field type="password" name="password" className="form-control" placeholder='********' />
              <ErrorMessage name="password"  className="text-danger text-start" component="div" />
            </div>
            <div className="d-flex justify-content-between pt-3">
              <div className="d-flex">
                <Field type="checkbox" name="Rember" className=" form-check-input" />
                <label className='ms-2 form-label label-left w-100'>Remember me</label>
              </div>

              <div className="d-flex">
                <label className='form-label text-primary'>Forget Password?</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>
              Login
            </button>
            <div>
        <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
        ></ToastContainer>
      </div>
          </Form>
          <div className="col-sm-0 col-md-0 col-xl-7 col-xxl-7 h-100">
            <img src={LoginImage} className="w-100 h-100" alt='login-poster' />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default React.memo(Authlogin);
