// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import placeholderImage from '../Components/img/PROCESS FLOW.png';
// import axios from "axios";
// import Cookies from "js-cookie";



// const Login = () => {
//   // const { account } = useContext(context);
//   const [userInput, setUserInput] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   function navigating(data) {
//     // console.log(data);
//     if (data.result.Role === "ADST") {
//       navigate("/" + data.result.Name + "/ADSTdashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//     else if (data.result.Role === "DDST") {
//       navigate("/" + data.result.Name + "/DDSTDashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//     else if (data.result.Role === "DGST") {
//       navigate("/" + data.result.Name + "/DgstDashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//     else {
//       navigate("/" + data.result.Name + "/Manufacturer", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {

//       const { data } = await axios.get(`http://localhost:4000/Login?param1=${userInput}&param2=${password}`, { //&param3=${account}
//         withCredentials: true
//       });
//       if (data.status === "Success") {
//         navigating(data);

//       }
//       else {
//         setLoginError('Invalid Credintials');
//         toast.info('Login Error !', {
//           position: "bottom-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } catch (err) {
//       setLoginError("Error while Login , Please try later");
//     };
//   };

//   useEffect(() => {
//     async function cookie() {
//       if(Cookies.get('jwt')){
//         try {
//           let { data } = await axios.get('http://localhost:4000/', {
//             withCredentials: true
//           }
//           );
//           navigating(data);
//         }
//         catch (err) {
//         }
//       }
//     }
//     cookie();
//   },[]);

//   return (
//     <section className="vh-100 login-section">
//       <div className="container">
//         <ToastContainer
//           position="bottom-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <button
//           type="button"
//           className="btn btn-primary"
//           data-toggle="modal"
//           data-target="#exampleModalLong"
//           style={{ marginTop: '40px' }}
//         >
//           Process Flow
//         </button>
//         <div
//           className="modal fade "
//           id="exampleModalLong"
//           tabIndex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLongTitle"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLongTitle">Process Flow</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <img src={placeholderImage} width="100%" height="100%" alt="Process Flow" />
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card login-card">
//               <div className="card-body">
//                 <h3 className="card-title text-center">Login</h3>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="user_id">User ID</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="user_id"
//                       placeholder="Enter User ID here"
//                       value={userInput}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="inputPassword">Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="inputPassword"
//                       placeholder="Password"
//                       value={password}
//                       onChange={handlePasswordChange}
//                       required
//                     />
//                   </div>
//                   {loginError && <div className="alert alert-danger" role='alert'>{loginError}</div>}
//                   <button type="submit" className="btn btn-primary btn-login">
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;



// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import placeholderImage from '../Components/img/PROCESS FLOW.png';
// import axios from "axios";
// import Cookies from "js-cookie";


// import firebase from'./Firebase'

// const Login = () => {
//   const [userInput, setUserInput] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');
//   let number;
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [verificationId, setVerificationId] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const configureCaptcha = () => {
//     // console.log('kkkkkmmmmmmm');
//     const auth = firebase.getAuth();
//     Window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('auth','sign-in-button', {
//       'size': 'normal',
//       'callback': (response) => {
//         sendOTP();
//         console.log("Recaptcha verified");
//       },
//       defaultCountry: "IN"
//     });
//   };

//   const sendOTP = () => {
//     const phoneNumber = "+91" + number;
//     const appVerifier=Window.recaptchaVerifier;
//     console.log(new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         sendOTP();
//         console.log("Recaptcha verified");
//       },
//       defaultCountry: "IN"}));
//     firebase
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         setVerificationId(confirmationResult.verificationId);
//         console.log("OTP has been sent");
//       })
//       .catch((error) => {
//         console.log(error);
//         console.log("SMS not sent");
//       });
//   };
  
//   const onSubmitOTP = (e) => {
//     e.preventDefault();
//     const code = otp;
//     const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
//     firebase.auth().signInWithCredential(credential)
//       .then((result) => {
//         alert("Your login was successful");
//         // navigate('/Welcome');
//       }).catch((error) => {
//         alert("Invalid OTP, login unsuccessful");
//         // navigate('/Login');
//       });
//   };

//   useEffect(()=>{
//     if(otpSent){
//       configureCaptcha();
//     }
//   },[Number,otpSent])

//   function navigating(data) {
//     if (data.result.Role === "ADST") {
//       navigate("/" + data.result.Name + "/ADSTdashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//     else if (data.result.Role === "DDST") {
//       navigate("/" + data.result.Name + "/DDSTDashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//     else if (data.result.Role === "DGST") {
//       navigate("/" + data.result.Name + "/DgstDashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//     else {
//       navigate("/" + data.result.Name + "/Manufacturer", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(`http://localhost:4000/Login?param1=${userInput}&param2=${password}`, {
//         withCredentials: true
//       });
  
//       if (data.status === "Success") {
//         if (data.result.Mobile) {
//           // console.log(data.result.Mobile)
//           number=data.result.Mobile;
//           sendOTP();
//           setOtpSent(true);
//         } else {
//           navigating(data);
//         }
//       } else {
//         setLoginError('Invalid Credentials');
//         toast.info('Login Error!', {
//           position: "bottom-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } catch (err) {
//       console.log(err);
//       setLoginError("Error while logging in. Please try again later.");
//     }
//   };

  // useEffect(() => {
  //   async function cookie() {
  //     if (Cookies.get('jwt')) {
  //       try {
  //         let { data } = await axios.get('http://localhost:4000/', {
  //           withCredentials: true
  //         });
  //         navigating(data);
  //       } catch (err) {
  //       }
  //     }
  //   }
  //   cookie();
  // }, []);

//   return (
//     <section className="vh-100 login-section">
//       <div className="container" >
//         <ToastContainer
//           position="bottom-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <button
//           type="button"
//           className="btn btn-primary"
//           data-toggle="modal"
//           data-target="#exampleModalLong"
//           style={{ marginTop: '40px' }}
          
//         >
//           Process Flow
//         </button>
//         <div
//           className="modal fade "
//           id="exampleModalLong"
//           tabIndex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLongTitle"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLongTitle">Process Flow</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <img src={placeholderImage} width="100%" height="100%" alt="Process Flow" />
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center" id="sign-in-button">
//           <div className="col-md-6">
//             <div className="card login-card">
//               <div className="card-body">
//                 <h3 className="card-title text-center">Login</h3>
//                 {!otpSent && (
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="user_id">User ID</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="user_id"
//                         placeholder="Enter User ID here"
//                         value={userInput}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="inputPassword">Password</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="inputPassword"
//                         placeholder="Password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                         required
//                       />
//                     </div>
//                     {loginError && <div className="alert alert-danger" role='alert'>{loginError}</div>}
//                     <button type="submit"  className="btn btn-primary btn-login">
//                       Login
//                     </button>
//                   </form>
//                 )}
//                 {otpSent && (
//                   <form onSubmit={onSubmitOTP}>
//                     <div className="form-group">
//                       <label htmlFor="otp">Enter OTP</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="otp"
//                         placeholder="Enter OTP here"
//                         value={otp}
//                         onChange={setOtp}
//                         required
//                       />
//                     </div>
//                     {loginError && <div className="alert alert-danger" role='alert'>{loginError}</div>}
//                     <button type="submit" className="btn btn-primary btn-login">
//                       Verify OTP
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import placeholderImage from '../Components/img/PROCESS FLOW.png';
import axios from "axios";
import Cookies from "js-cookie";


const Login = () => {
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function navigating(data) {
    if (data.result.Role === "ADST") {
      navigate("/" + data.result.Name + "/ADSTdashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
    }
    else if (data.result.Role === "DDST") {
      navigate("/" + data.result.Name + "/DDSTDashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
    }
    else if (data.result.Role === "DGST") {
      navigate("/" + data.result.Name + "/DgstDashboard", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
    }
    else {
      navigate("/" + data.result.Name + "/Manufacturer", { state: { "userData": data.result.Name, "account": data.result.Account.toLowerCase() } });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`http://localhost:4000/Login?param1=${userInput}&param2=${password}`, {
        withCredentials: true
      });

      if (data.status === "Success") {
        localStorage.setItem("OTP",false);
          navigate("/otp", { state: { "mobileNumber": data.result.Mobile  ,"Data": data }});

          // navigating(data);
      } else {
        setLoginError('Invalid Credentials');
        toast.info('Login Error!', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (err) {
      setLoginError("Error while logging in. Please try again later.");
    }
  };

  useEffect(() => {
    async function cookie() {
      if (Cookies.get('jwt')&&localStorage.getItem("OTP")) {
        try {
          // console.log("hii");
          let { data } = await axios.get('http://localhost:4000/', {
            withCredentials: true
          });
          // console.log(data);
          navigating(data);
        } catch (err) {
        }
      }
    }
    cookie();
  }, []);

  return (
    <section className="vh-100 login-section">
      <div className="container">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
          style={{ marginTop: '40px' }}
        >
          Process Flow
        </button>
        <div
          className="modal fade "
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Process Flow</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={placeholderImage} width="100%" height="100%" alt="Process Flow" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card login-card">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="user_id">User ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="user_id"
                      placeholder="Enter User ID here"
                      value={userInput}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  {loginError && <div className="alert alert-danger" role='alert'>{loginError}</div>}
                  <button type="submit" className="btn btn-primary btn-login">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
