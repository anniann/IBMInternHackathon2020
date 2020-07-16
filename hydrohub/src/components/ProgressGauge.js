import React from "react"
import { GaugeChart } from "@carbon/charts-react";

class ProgressGauge extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    "group": "value",
                    "value": 99
                }
            ],
            options: {
                "resizable": true,
                "height": "200px",
                "gauge": {
                    "type": "full"
                },
                "color": {
                    "scale": {
                        "value": "#891EE8"
                    }
                }
            }
        }
    }

    render() {
        return (
            <GaugeChart
                data={this.state.data}
                options={this.state.options}>
            </GaugeChart>
        )
    }
}

export default ProgressGauge