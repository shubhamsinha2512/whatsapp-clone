import './App.css';

import {useState, useEffect} from 'react'
import axios from 'axios'

//Routed Components
/*----------------------------- */

import Auth from './Auth/Auth';
/* *********************** */
import Dashboard from './Dashboard/Dashboard'

function App() {

  const [authStatus, setAuthStatus] = useState({
    loggedIn:false
  })

  return (
    <div className="app">
      <div className="app_body">
        {authStatus.loggedIn ? <Dashboard /> : <Auth className='auth' />}
      </div>
    </div>
  );
}

export default App;
