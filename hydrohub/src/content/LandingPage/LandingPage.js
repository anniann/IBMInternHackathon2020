import React from 'react';
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import Button from 'carbon-components-react/lib/components/Button';
import './LandingPage.scss';

const Landing = () => (
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

)

export default Landing;

  

