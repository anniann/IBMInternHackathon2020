import React from "react"
import { GaugeChart } from "@carbon/charts-react";
import ProgressGauge from "../../components/ProgressGauge"
import FilterSelect from "../../components/FilterSelect"
import "./org-dashboard.scss"

const OrgDashboard = () => {
    return (
        <div className="bx--grid bx--grid--full-width org-dashboard">
            <div className="bx--row org-dashboard__org-name">
                <div className="bx--col-lg-16">
                    <br/><br/>
                    <h1 style={{paddingLeft: "75px"}} align="center">Company Name's Dashboard</h1>
                </div>
            </div>
            <div className="bx--row org-dashboard__total-prog-gauge">
                <div className="bx--col-lg-5"/>
                <div className="bx--col-lg-4">
                    <h2 style={{marginLeft: "40px", marginTop: "30px"}}>Total Progress</h2>
                    <br/><br/>
                    <ProgressGauge />
                    <br/><br/>
                </div>
            </div>
            <div className="bx--row org-dashboard__breakdown-prog">
                <div className="bx--col-lg-2"/>
                <div className="bx--col-lg-3">
                    <h3 style={{marginLeft: "105px", marginTop: "20px"}}>Water</h3><br/>
                    <ProgressGauge />
                </div>
                <div className="bx--col-lg-3">
                    <h3 style={{marginLeft: "110px", marginTop: "20px"}}>Food</h3><br/>
                    <ProgressGauge />
                </div>
                <div className="bx--col-lg-4">
                    <h3 style={{marginLeft: "90px", marginTop: "20px"}}>Medical</h3><br/>
                    <ProgressGauge />
                </div>
            </div>
            <hr style={{marginTop: "150px"}}/>
            <div className="bx--row org-dashboard__your-donors">
                <div className="bx--col-lg-8">
                    <h2 style={{marginLeft: "15px", marginTop: "10px"}}>Your Donors</h2>
                </div>
            </div>
            <div className="bx--row org-dashboard__your-donors-text">
                <div className="bx--col-lg-8">
                    <p style={{marginLeft: "15px"}}>Check out who's been helping your cause!</p>
                </div>
            </div>
            <div className="bx--row org-dashboard__filter">
                <div className="bx--col-lg-8">
                    <div style={{marginLeft: "15px", marginTop: "20px"}}><FilterSelect /></div>          
                </div>
            </div>
        </div>
    )
}

export default OrgDashboard