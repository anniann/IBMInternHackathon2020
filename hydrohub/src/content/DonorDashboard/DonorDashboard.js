import React from "react"
import { Tile } from "carbon-components-react";
import { UnorderedList, ListItem } from "carbon-components-react";
import { ModalWrapper } from "carbon-components-react";
import AnalyticsNum from "../../components/AnalyticsNum";
import UIShell from "../../components/UIShell"

const DonorDashboard = () => {
        return (
            <div>
            <UIShell />
            <div className="bx--grid bx--grid--full-width donor-dashboard">
                <div className="bx--row donor-dashboard__your-dashboard">
                    <div className="bx--col-lg-16">
                        <br/><br/>
                        <h1 style={{marginLeft: "10px", marginTop: "50px"}} align="center">Your Dashboard</h1>
                    </div>
                </div>
                <div className="bx--row donor-dashboard__analytics-overview">
                    <h2 style={{marginTop: "60px", marginLeft: "35px"}}>Analytics Overview</h2>
                </div>
                <div className="bx--row donor-dashboard__analytics-tiles" style={{marginTop: "30px"}}>
                    <div className="bx--col-lg-3">
                        <Tile>
                            <div style={{ height: '300px'}}>
                                <p style={{fontSize: "25px", marginBottom: "5px", marginTop: "10px", marginLeft: "10px"}}>Donated to</p>
                                <AnalyticsNum value="8" color="#c813cf" offset="110px"/>
                                <p style={{fontSize: "25px", marginTop: "35px", marginLeft: "200px"}}>causes</p>
                            </div>
                        </Tile>
                    </div>
                    <div className="bx--col-lg-3">
                        <Tile>
                            <div style={{ height: '300px'}}>
                                <p style={{fontSize: "25px", marginBottom: "5px", marginTop: "10px"}}>Helped</p>
                                <AnalyticsNum value="70k" color="#224be0" offset="0px"/>
                                <p style={{fontSize: "25px", marginTop: "20px", marginLeft: "170px"}}>people in need</p>
                            </div> 
                        </Tile>
                    </div>
                    <div className="bx--col-lg-3">
                        <Tile>
                            <div style={{ height: '300px'}}>
                                <p style={{fontSize: "25px", marginBottom: "5px", marginTop: "10px"}}>Donated</p>
                                <AnalyticsNum value="100" color="#f2a922" offset="0px"/>
                                <p style={{fontSize: "25px", marginTop: "20px", marginLeft: "170px"}}>gallons of water</p>
                            </div>
                        </Tile>
                    </div>
                    <div className="bx--col-lg-3">
                        <Tile>
                            <div style={{ height: '300px'}}>
                                <p style={{fontSize: "25px", marginBottom: "5px", marginTop: "10px"}}>Donated</p>
                                <AnalyticsNum value="740" color="#57d455" offset="0px"/>
                                <p style={{fontSize: "25px", marginTop: "35px", marginLeft: "170px"}}>lbs of food</p> 
                            </div>
                        </Tile>
                    </div>
                </div>
                <div className="bx--row donor-dashboard__analytics-overview">
                    <h3 style={{marginTop: "40px", marginLeft: "35px"}}>You're doing great!</h3>
                </div>
                <hr style={{marginTop: "60px"}}/>
                <div className="bx--row donor-dashboard__your-inventory">
                    <h2 style={{marginTop: "40px", marginLeft: "35px"}}>Your Inventory</h2>
                </div>
                <div className="bx--row donor-dashboard__inventory details">
                    <div style={{marginTop: "15px", marginLeft: "50px"}}>
                        <UnorderedList>
                            <ListItem>
                                Water
                            </ListItem>
                            <UnorderedList nested>
                                <ListItem>
                                    20 jugs (1 gal)
                                </ListItem>
                                <ListItem>
                                    200 bottles (500 mL)
                                </ListItem>
                            </UnorderedList>
                            <ListItem>
                                Food
                            </ListItem>
                            <UnorderedList nested>
                                <ListItem>
                                    80 canned goods
                                </ListItem>
                            </UnorderedList>
                            <ListItem>
                                Medical Supplies
                            </ListItem>
                            <UnorderedList nested>
                                <ListItem>
                                    50 hand sanitizer bottles (12 fl oz)
                                </ListItem>
                                <ListItem>
                                    100 masks
                                </ListItem>
                            </UnorderedList>
                            <ListItem>
                                Other
                            </ListItem>
                        </UnorderedList>
                    </div>
                </div>                
                <div className="bx--row donor-dashboard__edit-inventory">
                    <div style={{marginTop: "30px", marginLeft: "35px", fontSize: "30px"}}>
                        <ModalWrapper
                            buttonTriggerText="Edit Inventory"
                            modalHeading="Update your available resources"
                            modalLabel="Inventory"
                        >
                            <p>Inventory stuff</p>
                        </ModalWrapper>
                    </div>
                </div>
                <hr style={{marginTop: "60px"}}/>
                <div className="bx--row donor-dashboard__recent-donations">
                    <h2 style={{marginTop: "40px", marginLeft: "35px", marginBottom: "15px"}}>Recent Donations</h2>
                </div>
                <div style={{marginLeft: "30px", marginBottom: "200px"}} className="bx--row donor-dashboard__recent-donation-org">
                    <Tile>
                        <div style={{ height: "150px", width: "1000px"}}>
                            <h2>Local Clinic</h2>
                            <hr/>
                            <h4>Your Contribution:</h4><br/>
                            <div style={{marginLeft: "20px"}}>
                                <UnorderedList>
                                    <ListItem>
                                        20 gallons of water
                                    </ListItem>
                                    <ListItem>
                                        50 masks
                                    </ListItem>
                                </UnorderedList>
                            </div>
                        </div>
                    </Tile>
                </div>
            </div>
            </div>
        )
}

export default DonorDashboard