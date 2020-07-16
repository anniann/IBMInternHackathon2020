import React from "react";
import { Tile } from "carbon-components-react";
import { UnorderedList, ListItem } from "carbon-components-react";
import { ModalWrapper } from "carbon-components-react";
import AnalyticsNum from "../../components/AnalyticsNum";
import UIShell from "../../components/UIShell";
import Carousel from "react-bootstrap/Carousel";
import Button from "carbon-components-react/lib/components/Button";
import { Link } from "react-router-dom";

const Causes = () => {
  return (
    <div>
      <UIShell />
      <div>
        <div class="container-fluid" style={{marginTop: "70px"}}>
          <div className="row title" style={{ marginBottom: "20px", marginLeft: "600px" }}>
            <h1>Top Causes</h1>
          </div>
          <div>
          <Carousel>
            <Carousel.Item style={{ height: "650px" }}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={"https://static.wixstatic.com/media/1401c4_02e8094f9a474cc8a3f8a89944405f26~mv2.jpg/v1/fill/w_1000,h_425,al_c,q_90,usm_0.66_1.00_0.01/1401c4_02e8094f9a474cc8a3f8a89944405f26~mv2.jpg"}
              />

              <Carousel.Caption>
                <h3>Heartland Health Center</h3>
                <p>Distance: 4 mi</p>
                <Button kind="tertiary">
                <Link to="/organization-dashboard" style={{ fontWeight: "bold", color: "#4287f5"}}> Donate </Link>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "650px" }}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={"https://www.gannett-cdn.com/-mm-/f05b8de25b946ddf8c9ebf3db9c4a544205fadcb/c=0-56-1600-960/local/-/media/2016/01/21/LAGroup/LafayetteLA/635889778128521907-photos-lafdc5-566kmr1j1ysqzktk2ku.jpg?auto=webp&format=pjpg&width=1200"}
              />

              <Carousel.Caption>
                <h3>Lafayette Community Health Care Clinic</h3>
                <p>Distance: 13 mi</p>
                <Button kind="tertiary">
                <Link to="/organization-dashboard" style={{ fontWeight: "bold", color: "#4287f5"}}> Donate </Link>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "650px" }}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={"https://s3-us-east-2.amazonaws.com/hackensackmeridianhealth/wp-content/uploads/2017/02/20164049/transplant.jpg"}
              />

              <Carousel.Caption>
                <h3>Hackensack Meridian Health</h3>
                <p>Distance: 25 mi</p>
                <Button kind="tertiary">
                <Link to="/organization-dashboard" style={{ fontWeight: "bold", color: "#4287f5"}}> Donate </Link>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;
