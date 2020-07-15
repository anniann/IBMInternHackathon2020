// import { Button } from 'carbon-components-react';
import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <Button>Hello React!</Button>
  //     </header>
  //   </div>
  // );
  return (
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard"> <Dashboard /> </Route>
          <Route path="/github"> <Github /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
      </div>
    </Router>
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
          <li> <img src="./images/logo2.png" width="80" alt="logo" /> </li>
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
