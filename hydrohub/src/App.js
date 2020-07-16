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


function App() {
  return (
      <div className="App">
        {/* <UIShell /> */}
        
        <Router>
           <Route exact path="/" component={LandingPage} />
           <Route exact path="/organizationdashboard" component={OrgDashboard} />
           <Route exact path="/donordashboard" component={DonorDashboard} />
           {/* <Route exact path="/messages" component={Messages} /> */}
        </Router>
      </div>


    );
}

   



export default App;
