import './App.css';

import Chat from './Chat/Chat'

//Routed Components
/*----------------------------- */
import Sidebar from './Sidebar/Sidebar';
import SidebarProfile from './Sidebar/SidebarProfile/SidebarProfile';
import Register from './Register/Register';
/* *********************** */

import {Switch, Route} from 'react-router-dom';
import SidebarNewChat from './Sidebar/SidebarNewChat/SidebarNewChat';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/* <Register className='register' /> */}
        <Switch>
          <Route path="/" exact component={Sidebar} />
          <Route path="/profile" component={SidebarProfile} />
          <Route path="/newChat" component={SidebarNewChat} />
        </Switch>
        <Chat />
      </div>
    </div>
  );
}

export default App;
