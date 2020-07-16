import React from 'react';
import { NavLink } from 'react-router-dom'
import './app.scss';
import Progress from "./components/UIShell";
import { Content } from 'carbon-components-react/lib/components/UIShell';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UIShell from './components/UIShell';
import OrgDashboard from './content/OrgDashboard';
import DonorDashboard from './content/DonorDashboard';
import LandingPage from './content/LandingPage';
import Messages from './content/Messages';
import WorldMap from './content/WorldMap';
import Transactions from './content/Transactions';
import Causes from './content/Causes';
import Search from './content/Search';


function App() {
  return (
      <div>
        {/* <UIShell /> */}
        
        <Router>
           <div className="App"><Route exact path="/" component={LandingPage} /></div>
           <Route exact path="/organization-dashboard" component={OrgDashboard} />
           <Route exact path="/donor-dashboard" component={DonorDashboard} />
           <Route exact path="/messages" component={Messages} />
           <Route exact path="/world-map" component={WorldMap} />
           <Route exact path="/causes" component={Causes} />
           <Route exact path="/transaction-history" component={Transactions} />
           <Route exact path="/search" component={Search} />
        </Router>
      </div>


    );
}

   



export default App;
