// import React, {useState} from 'react'
// import '../../style/Login.css'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { SendUserDataDb } from '../../service/api';


// const initialData = {
//     username : '',
//     email : '',
//     Rpassword : '',
// }


// const Register = () => {

//     const [UserData , setUserData] = useState(initialData) ///for register user///

//     const getUserData = (e) => {
//         setUserData({...UserData , [e.target.name]:e.target.value})
//     }


//     const sendUserData = () => {
//         if(UserData.username && UserData.email && UserData.Rpassword){
//             SendUserDataDb(UserData)
//         }
//         else{
//             alert('fill the field')
//         }
//     }

//     return (
//         <div className='create_account_container'>
//         <div className='C_account_input_field'>
//             <AccountCircleIcon className='Ca_icon'/>
//             <h2 className='Ca_text'>Create accout</h2>
//             <div className='CA_input_Group'>
//                 <input type='text' name='username' placeholder='Username' onChange={getUserData} className='CA_email'/>
//             </div>
//             <div className='CA_input_Group'>
//                 <input type='email' name='email' placeholder='email' onChange={getUserData} className='CA_email'/>
//             </div>
//             <div className='CA_input_Group'>
//                 <input type='password' name='Rpassword' placeholder='password' onChange={getUserData} className='CA_password'/>
//             </div>
//             <button className='CA_Login_btn' onClick={sendUserData}>Sign up</button>
//             <span className='CA_go_to_login_page'>Go to Login page</span>
//         </div>
//     </div>
//     )
// }

// export default Register
