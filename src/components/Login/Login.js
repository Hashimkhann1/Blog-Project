import '../../style/Login.css'
import React, { useState } from 'react'
// import avatar from '../../images/avatar.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import { CreateUserDB } from '../../service/api';
import { useNavigate } from 'react-router-dom';



const initialCreateUser = {
    Name : '',
    email : '',
    password : ''
}


const initialLoginUser = {
    email : '',
    password : ''
}


const Login = () => {


    const url = 'http://localhost:8001'


    const [LoginPage , setLoginPage] = useState(true)
    const [createUser , setCreateUser] = useState(initialCreateUser)



    const getCreateUserData = (e) => {
        setCreateUser({...createUser , [e.target.name]:e.target.value})
    }


    const createUserInDataBase = () => {
        if(createUser.Name && createUser.email && createUser.password){
            CreateUserDB(createUser)
            console.log(createUser)
        }
        else{
            alert('Fille the filed')
        }
    }



    // ///////// Login User data ////////

    const hsitory = useNavigate()


    const [loginUser , setLoginUser] = useState(initialLoginUser)

    const getLoginUseData = (e) => {
        setLoginUser({...loginUser , [e.target.name]:e.target.value})
    }

    const sendLoginUserHomePage = () => {
        axios.post(`${url}/login` , loginUser).then(res => {
            alert(res.data.message)
            if(res.data.user){
                localStorage.setItem('user' , JSON.stringify(res.data.user))
                hsitory('/')
            }
        })
        console.log(loginUser)
    }


    return (
        <>
        {LoginPage ? (<div className='Login_main_container'>
            <div className='input_field'>
                <AccountCircleIcon className='Icon' />
                <h2 className='Login_text'>Login</h2>
                <div className='input_Group'>
                    <input type='text' name='email' placeholder='email' onChange={getLoginUseData} className='userEmail'/>
                </div>
                <div className='input_Group'>
                    <input type='password' name='password' placeholder='password' onChange={getLoginUseData} className='userPassowrd'/>
                </div>
                <button className='Login_btn' onClick={sendLoginUserHomePage}>Login</button>
                <span className='Create_account' onClick={() => setLoginPage(false)}>Create account</span>
            </div>
        </div>) : (
            <div className='create_account_container'>
                <div className='C_account_input_field'>
                    <AccountCircleIcon className='Ca_icon'/>
                    <h2 className='Ca_text'>Create accout</h2>
                    <div className='CA_input_Group'>
                        <input type='text' name='Name' placeholder='Username' onChange={getCreateUserData} className='CA_email'/>
                    </div>
                    <div className='CA_input_Group'>
                        <input type='email' name='email' placeholder='email' onChange={getCreateUserData} className='CA_email'/>
                    </div>
                    <div className='CA_input_Group'>
                        <input type='password' name='password' placeholder='password' onChange={getCreateUserData} className='CA_password'/>
                    </div>
                    <button className='CA_Login_btn' onClick={createUserInDataBase}>Sign up</button>
                    <span className='CA_go_to_login_page' onClick={() => setLoginPage(true)}>Go to Login page</span>
                </div>
            </div>
        )}
        </>

    )
}

export default Login
