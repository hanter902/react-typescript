// import React, {useState} from "react";
// import ImageHeaderLogin from "./bg-header-login.png";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { Checkbox } from "primereact/checkbox";
// import {ILoginState} from '../../store/login/ILogin';

// import "./login.css";

// type Props = {
//   username: string,
//   password: string,
//   handleLoginClick: (user: ILoginState) => void
// }

// const Login : React.FC<Props> = ({username, password, handleLoginClick }) => {
//   const [_username, setUsername]  = useState(username);
//   const [_password, setPassword]  = useState(password);

//   return (
//     <div className="wraper">
//       <div className="login-body">
//         <div className="login-image">
//           <img src={ImageHeaderLogin} alt="" />
//         </div>
//         <div className="login-card">
//           <h1>
//             RAIN<span>LOGIN</span>
//           </h1>
//           <span>
//             Welcome, please use the form to sign-in <br />
//             Rain network
//           </span>
//           <br />

//           <div className="p-fluid" style={{ textAlign: "left" }}>
//             <div className="p-field">
//               <label htmlFor="firstname1">Email</label>
//               <InputText
//                 id="firstname1"
//                 type="text"
//                 value={_username}
//                 onChange={(e : React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
//                 placeholder="name@example.com"
//               />
//             </div>
//             <div className="p-field">
//               <label htmlFor="lastname1">Password</label>
//               <InputText
//                 id="lastname1"
//                 type="text"
//                 value={_password}
//                 onChange={(e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//                 placeholder="write your password..."
//               />
//             </div>
//           </div>

//           <div className="p-formgroup-inline form-footer">
//             <div className="p-field-checkbox">
//               <Checkbox inputId="city3" value="Chicago" checked={true} />
//               <label htmlFor="city3">Remember Me</label>
//             </div>
//             <a href="#" style={{ marginBottom: "15px" }}>
//               Forget Password?
//             </a>
//           </div>

//           <Button
//             label="LOGIN"
//             style={{ width: "100%", marginBottom: "0.7em" }}
//             onClick={() => handleLoginClick({username: _username, password: _password})}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
export default 'xxxx';