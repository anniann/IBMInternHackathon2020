import React from 'react';
import './App.scss';
import Progress from "./components/UIShell";
import { Content } from 'carbon-components-react/lib/components/UIShell';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UIShell from './components/UIShell';
import OrgDashboard from './content/OrgDashboard'
import './content/OrgDashboard/org-dashboard.scss'
import Button from 'carbon-components-react/lib/components/Button';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <UIShell /> */}
         
         <Switch>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
         </div>
      
      </Router>

    );
  }

function Home() {
  return (
    //<div style={{ backgroundImage: `url(${require("./background2.png")})`, backgroundSize:'cover',  height: '100' }}>
    
      <div style={{ backgroundImage: `url(${require("./background2.png")})`, backgroundSize:'cover' }}>
        <div className="left">
          <section className="main">
          </section>
          <section className="main">
            <ul> 
              <li> <img src="./images/logo.png" width="80" alt="logo" /> </li>
              <li> <div className="main-text"> hydrohub</div> </li>
              </ul>
            </section>
          <section className="main"> 
            <ul>
              <li> Addressing supply chain shortage<br></br> for clinics worldwide.</li>
              </ul>
          </section>
          <section className="main">
            </section>
          </div>
        <div className="right">
          <section className="right-item">
            <ul>
              <li> <Button kind="primary"> Donator Dashboard </Button> </li>
              </ul>
            </section>
          
          </div>
          <div className="right2">
            <section className="right-item">
              <ul>
                <li> <Button kind="secondary"> Organization Dashboard</Button> </li>
                </ul>
                </section>
          </div>


        
      </div>
      
      

      
  );
    
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}
function Github() {
  return <h2>Github</h2>;
}

export default App;
