import React from "react"
import { Tile } from "carbon-components-react";
import { UnorderedList, ListItem } from "carbon-components-react";
import { ModalWrapper } from "carbon-components-react";
import AnalyticsNum from "../../components/AnalyticsNum";
import UIShell from "../../components/UIShell"

const Search = () => {
        return (
            <div>
            <UIShell />
            <div className="bx--grid bx--grid--full-width donor-dashboard">           
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

export default Search