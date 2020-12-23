import './App.css';

import {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URI} from './config'
import io from 'socket.io-client'

//Routed Components
/*----------------------------- */

import Auth from './Auth/Auth';
/* *********************** */
import Dashboard from './Dashboard/Dashboard'

function App() {

  // let socket = io(BASE_URI);
  var server = axios.create({
    baseURL : BASE_URI
  });

  const [authStatus, setAuthStatus] = useState({
    authStatus:false,
    mobile:''
  })

  useEffect(()=>{
    server.get('/').then((res)=>{
      setAuthStatus({
        authStatus:res.data.authStatus,
        mobile:res.data.mobile
      });
      console.log(authStatus);
    })
  }, []);

  return (
    <div className="app">
      <div className="app_body">
        {authStatus.authStatus ? <Dashboard mobile={authStatus} /> : <Auth className='auth' />}
      </div>
    </div>
  );
}

export default App;
