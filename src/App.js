import './App.css';

import Chat from './Chat/Chat'

//Routed Components
/*----------------------------- */
import Sidebar from './Sidebar/Sidebar';
import SidebarProfile from './Sidebar/SidebarProfile/SidebarProfile'
/* *********************** */

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Switch>
          <Route path="/" exact component={Sidebar} />
          <Route path="/profile" component={SidebarProfile} />
        </Switch>
        <Chat />
      </div>
    </div>
  );
}

export default App;
