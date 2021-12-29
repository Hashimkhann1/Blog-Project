import React, { useState } from 'react';
import './App.css';
import { Box } from '@material-ui/core'
import {BrowserRouter , Route , Switch} from 'react-router-dom'

// components

import Header from './components/Header';
import Home from './components/home/Home';
import Detailview from './components/post/Detailview';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import Login from './components/Login/Login'



function App() {

  const [user , setUser] = useState(false)

  const LoginHandler = (e) => {
    setUser(true)
  }

  return (
   <BrowserRouter>
           {!user ? <Login subHandle={LoginHandler}/> :
           <>
           <Box style={{marginTop:72}}>
             <Header />
             <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/details:id'component={Detailview}/>
               <Route exact path='/create' component={CreateView}/>
               <Route exact path='/update/:id' component={UpdateView}/>
             </Switch>
           </Box>
           </>
           
           }
   </BrowserRouter>
  );
}

export default App;
