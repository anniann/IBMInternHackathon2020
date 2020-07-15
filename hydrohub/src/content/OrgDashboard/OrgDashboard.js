import React from "react"
import { GaugeChart } from "@carbon/charts-react";
import ProgressGauge from "../../components/ProgressGauge"

const OrgDashboard = () => {
    return (
        <div className="bx--grid bx--grid--full-width org-dashboard">
            <div className="bx--row org-dashboard__org-name">
                <div className="bx--col-lg-16">
                    <br/><br/>
                    <h1 align="center">Company Name's Dashboard</h1>
                </div>
            </div>
            <div className="bx--row org-dashboard__total-prog">
                <div className="bx--col-lg-16">
                    <br/><br/><br/><br/>
                    <h2 align="center">Total Progress</h2>
                </div>
            </div>
            <div className="bx--row org-dashboard__total-prog-gauge">
                <div className="bx--col-lg-6"/>
                <div className="bx--col-lg-10">
                    <br/><br/>
                    <ProgressGauge />
                    <br/><br/>
                </div>
            </div>
            <div className="bx--row org-dashboard__supply-cat">
                <div className="bx--col-lg-5">
                    <h3 align="center">Water</h3>
                </div>
                <div className="bx--col-lg-6">
                    <h3 align="center">Food</h3>
                </div>
                <div className="bx--col-lg-5">
                    <h3 align="center">Medical</h3>
                </div>
            </div>
            <div className="bx--row org-dashboard__breakdown-prog">
                <div className="bx--col-lg-5">
                    <ProgressGauge />
                </div>
                <div className="bx--col-lg-6">
                    <ProgressGauge />
                </div>
                <div className="bx--col-lg-5">
                    <ProgressGauge />
                </div>
            </div>
        </div>
    )
}

export default OrgDashboard