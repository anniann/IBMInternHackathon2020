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

function App() {
  return (
    <div className="App">
      
      <UIShell />
      <Content>
        <OrgDashboard />
      </Content>
      
    </div>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">Dashboard</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/Dashboard">
    //         <Dashboard />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    );
  }

function Home() {
  return (
    //<div style={{ backgroundImage: `url(${require("./background2.png")})`, backgroundSize:'cover',  height: '100' }}>
    <div style={{ backgroundImage: `url(${require("./background2.png")})`, backgroundSize:'cover',  height: '100' }}>
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
      <section classname="main">
          <ul>
            <li> <Link to="/">Dashboard</Link> </li>
            <li> <Link to="/">Github</Link> </li>
            </ul>
        </section>
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
