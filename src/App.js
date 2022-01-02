import React, { useEffect, useState } from 'react';
import './App.css';
import { Box } from '@material-ui/core'
import {BrowserRouter , Navigate, Route , Routes } from 'react-router-dom'

// components

import Header from './components/Header';
import Home from './components/home/Home';
import Detailview from './components/post/Detailview';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import Login from './components/Login/Login'



function App() {

  const [UserData , setUserData] = useState({})
  

  const checkForUser = () => {
    let data = localStorage.getItem('user')
    if(data){
      setUserData(JSON.parse(data))
    }
  }
  useEffect(() => {
    checkForUser();
    // console.log(UserData)
  }, [])


  return (
   <BrowserRouter>
           <Box style={{marginTop:72}}>
             <Header user={UserData}/>
             <Routes>
               <Route exact path='/' element={UserData && UserData._id ? <Home /> : <Navigate to='/login' />}/>
               <Route exact path='/details:id' element={UserData && UserData._id ? <Detailview /> : <Navigate to='/login' />}/>
               <Route exact path='/create' element={UserData && UserData._id ? <CreateView /> : <Navigate to='/login' />}/>
               <Route exact path='/update/:id' element={UserData && UserData._id ? <UpdateView /> : <Navigate to='/login' />}/>
               <Route exact path='/login' element={UserData && UserData._id ? <Navigate to='/'/> : <Login />}/>
             </Routes>
           </Box>
   </BrowserRouter>
  );
}

export default App;
