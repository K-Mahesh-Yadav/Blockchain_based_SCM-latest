// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyA4i-qsbrfND-vfAgJFduROngUhxiWcmYM",
//   authDomain: "blockchain-based-supply.firebaseapp.com",
//   projectId: "blockchain-based-supply",
//   storageBucket: "blockchain-based-supply.appspot.com",
//   messagingSenderId: "24116872624",
//   appId: "1:24116872624:web:8e4a435aaee3a5463e8275",
//   measurementId: "G-J6C7RZ6416"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// const Otp = () => {
//     const navigate = useNavigate();
//     const[number,setnumber] = useState("");
//     const[OTP,setOTP] = useState("");

//     const configureCaptcha=()=>{
//         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//             'size': 'invisible',
//             'callback': (response) => {
//               onSignInSubmit();
//               console.log("Recaptcha verified");
//             },
//             defaultCountry : "IN"
//           });
//     }

//     function onSignInSubmit (e){
//         e.preventDefault();
//         configureCaptcha()
//         const phoneNumber = "+91" + number;
//         console.log(phoneNumber)

//         const appVerifier = window.recaptchaVerifier;
//         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//             .then((confirmationResult) => {
//             window.confirmationResult = confirmationResult;
//             console.log("OTP has been sent")
//             }).catch((error) => {
//             console.log("SMS not send")
//             });

//     }

//     function onSubmitOTP (e){
//         e.preventDefault();
//         const code = OTP;
//         console.log(OTP)

//         window.confirmationResult.confirm(code).then((result) => {
//             alert("Your Login is Successfull");
//             navigate('/Welcome');
//         }).catch((error) => {
//                 alert("Invalid OTP , Login unsucessful ");
//                 navigate('/Login')
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={onSignInSubmit}>
//                 <div id='sign-in-button'></div>
//                 <h1>Verification</h1>
//                 <button onClick={()=>navigate("/register")}>&nbsp;Back&nbsp;</button>
//                 <input type="number" name="mobile" placeholder='Enter a mobile number to get OTP' className="form-control" required onChange={(e)=>{setnumber(e.target.value)}}/>
//                 <br></br>
//                 <button type='submit' className="btn btn-primary">Get OTP</button>
//                 <br></br>
//                 <br>
//                 </br>
//             </form>
//             <form onSubmit={onSubmitOTP}>
//             <br></br>
//                 <h2>Enter OTP</h2>
//                 <input type="number" name="OTP" placeholder='Enter your OTP' className="form-control" required onChange={(e)=>{setOTP(e.target.value)}}/>
//                 <br></br>
//                 <button type='submit' className="btn btn-primary">Verify</button>
//                 <br></br>
//             </form>              

//         </div>
//     );
// }

// export default Otp;



// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import firebase from "./Firebase";

// const Otp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [number, setNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [verificationId, setVerificationId] = useState("");

//   useEffect(() => {
//     const { mobileNumber } = location.state;
//     console.log(mobileNumber)
//     setNumber(mobileNumber);
//     configureCaptcha();
//   }, [location]);

//   const configureCaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         onSignInSubmit();
//         console.log("Recaptcha verified");
//       },
//       defaultCountry: "IN"
//     });
//   };

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     const phoneNumber = "+91" + number;
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         setVerificationId(confirmationResult.verificationId);
//         console.log("OTP has been sent");
//       }).catch((error) => {
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
//         navigate('/Welcome');
//       }).catch((error) => {
//         alert("Invalid OTP, login unsuccessful");
//         navigate('/Login');
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={onSignInSubmit}>
//         <div id='sign-in-button'></div>
//         <h1>Verification</h1>
//         <button onClick={() => navigate("/register")}>&nbsp;Back&nbsp;</button>
//         <input type="number" name="mobile" placeholder='Enter a mobile number to get OTP' className="form-control" required value={number} disabled />
//         <br />
//         <button type='submit' className="btn btn-primary">Get OTP</button>
//         <br />
//         <br />
//       </form>
//       <form onSubmit={onSubmitOTP}>
//         <br />
//         <h2>Enter OTP</h2>
//         <input type="number" name="OTP" placeholder='Enter your OTP' className="form-control" required onChange={(e) => { setOtp(e.target.value) }} />
//         <br />
//         <button type='submit' className="btn btn-primary">Verify</button>
//         <br />
//       </form>
//     </div>
//   );
// }

// export default Otp;


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import placeholderImage from '../Components/img/PROCESS FLOW.png';
// import firebase from "./Firebase";

// const Otp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [number, setNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loginError, setLoginError] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [verificationId, setVerificationId] = useState("");

//   useEffect(() => {
//     const { mobileNumber } = location.state;
//     setNumber(mobileNumber);
//     configureCaptcha();
//   }, [location]);

//   const configureCaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         onSignInSubmit();
//         console.log("Recaptcha verified");
//       },
//       defaultCountry: "IN"
//     });
//   };

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     const phoneNumber = "+91" + number;
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         setVerificationId(confirmationResult.verificationId);
//         console.log("OTP has been sent");
//       }).catch((error) => {
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
//         navigate('/Welcome');
//       }).catch((error) => {
//         alert("Invalid OTP, login unsuccessful");
//         navigate('/Login');
//       });
//   };

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
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card login-card">
//               <div className="card-body">
//                 <div id='sign-in-button'>
//                   <form onSubmit={onSignInSubmit}>
//                     <div id='sign-in-button'></div>
//                     <h1>Verification</h1>
//                     <button onClick={() => navigate("/register")}>&nbsp;Go Back&nbsp;</button>
//                     <input type="number" name="mobile" className="form-control" required value={number} disabled />
//                     <br />
//                     <button type='submit' className="btn btn-primary">Get OTP</button>
//                     <br />
//                     <br />
//                   </form>
//                   <form onSubmit={onSubmitOTP}>
//                     <br />
//                     <h2>Enter OTP</h2>
//                     <input type="number" name="OTP" className="form-control" required onChange={(e) => { setOtp(e.target.value) }} />
//                     <br />
//                     <button type='submit' className="btn btn-primary">Verify</button>
//                     <br />
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Otp;


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import placeholderImage from '../Components/img/PROCESS FLOW.png';
import firebase from "./Firebase";
import axios from 'axios';

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [number, setNumber] = useState("");
  const [data, setdata] = useState([]);
  const [otp, setOtp] = useState("");
  const [loginError, setLoginError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verificationId, setVerificationId] = useState("");


  useEffect(() => {
    const { mobileNumber, Data } = state;
    setNumber(mobileNumber);
    console.log(Data.result.Role);
    setdata(Data);
  }, [state]); 

  useEffect(() => {
    configureCaptcha();
  }, [data]);

  function navigating(data) {
    // console.log(data.result.Role)
    // axios.get(`http://localhost:4000/createCookie`,{...data.result._id}, {withCredentials: true});
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


  const configureCaptcha = () => {
    // console.log(data)
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Recaptcha verified");
      },
      defaultCountry: "IN"
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+91" + number;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setOtpSent(true);
        console.log("OTP has been sent");
      }).catch((error) => {
        console.log("SMS not sent");
        setLoginError('Error occured while sending otp')
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    firebase.auth().signInWithCredential(credential)
      .then((result) => {
        localStorage.setItem("OTP",true);
        navigating(data);
        // props.flag(true)
      }).catch((error) => {
        setLoginError('Invalid otp');
        // navigating(data);
      });
  };

  return (
    <section className="vh-100 login-section">
      <div className="container" >
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
                {!otpSent && (
                  <form onSubmit={onSignInSubmit}>
                    <h1>Verification</h1>
                    <button onClick={() => navigate("/")}>&nbsp;Go Back&nbsp;</button>
                    <br />
                    <br />
                    <label >Mobile Number</label>
                    <input type="number" name="mobile" className="form-control" required value={number} disabled />
                    <br />
                    <div id="recaptcha-container"></div>
                    {loginError && <div className="alert alert-danger" role='alert'>{loginError}</div>}
                    <button type='submit' className="btn btn-primary">Get OTP</button>
                    <br />
                    <br />
                  </form>
                )}
                {otpSent && (
                  <form onSubmit={onSubmitOTP}>
                    <label htmlFor="OTP">Enter OTP</label>
                    <input type="number" id='OTP' name="OTP" className="form-control" required onChange={(e) => { setOtp(e.target.value) }} />
                    <br />
                    {loginError && <div className="alert alert-danger" role='alert'>{loginError}</div>}
                    <button type='submit' className="btn btn-primary">Verify</button>
                    <br />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Otp;
