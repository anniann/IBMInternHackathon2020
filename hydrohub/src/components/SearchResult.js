import React from "react"
import { Tile } from "carbon-components-react";
import { Link } from "carbon-components-react";

    function SearchResult(props) {
        let helpText
        if (props.canHelp) {
            helpText = "(you can help this cause!)"
        } else {
            helpText = ""
        }

        return (
            <Tile>
                <div style={{ height: "250px", width: "1000px"}}>
                    <h2>{props.title} {helpText}</h2>
                    <p style={{fontSize: "16px"}}>{props.distance} away</p>
                    <hr/>
                    <h3>About this cause</h3>
                    <p style={{fontSize: "10px"}}>{props.completion} complete!</p><br/>
                    <div>
                        <p>{props.about}</p><br/>
                        <Link href="/causes">More details</Link>
                    </div>
                </div>
            </Tile>
        )
    }

export default SearchResult