import React from "react";
import { Tile } from "carbon-components-react";
import { UnorderedList, ListItem } from "carbon-components-react";
import { ModalWrapper } from "carbon-components-react";
import AnalyticsNum from "../../components/AnalyticsNum";
import UIShell from "../../components/UIShell";
import Carousel from "react-bootstrap/Carousel";

const Causes = () => {
  return (
    <div>
      <UIShell />
      <div>
        <div class="container" style={{marginTop: "70px"}}>
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn btn-warning">
              Top Causes
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"https://eskipaper.com/images/field-background-1.jpg"}
              />

              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"https://eskipaper.com/images/field-background-1.jpg"}
              />

              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"https://eskipaper.com/images/field-background-1.jpg"}
              />

              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Causes;
