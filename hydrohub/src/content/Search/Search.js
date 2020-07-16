import React from "react"
import { Tile } from "carbon-components-react";
import { UnorderedList, ListItem } from "carbon-components-react";
import { Search } from "carbon-components-react";
import UIShell from "../../components/UIShell";
import SearchResult from "../../components/SearchResult"

const SearchPage = () => {
        return (
            <div>
            <UIShell />
            <div className="bx--grid bx--grid--full-width search-page">   
                <div style={{marginLeft: "50px", marginTop: "70px"}} className="bx--row search-page__search-text">
                    <h1>Search</h1>
                </div>
                <div style={{marginLeft: "30px", marginTop: "20px", marginBottom: "10px"}} className="bx--row search-page__search-bar">
                    <Search 
                        id="search-1"
                        placeHolderText="Search for causes or donors"
                    />
                </div>
                <div style={{marginLeft: "30px", marginBottom: "20px"}} className="bx--row search-page__results-count">
                    <h5>Showing results</h5>
                </div>
                <div style={{marginLeft: "30px", marginBottom: "20px"}} className="bx--row search-page__result1">
                    <SearchResult 
                        title="Local Clinic"
                        canHelp="true"
                        distance="2 miles"
                        completion="99%"
                        about="Need lots of water and masks! SOS"
                    />
                </div>
                <div style={{marginLeft: "30px", marginBottom: "20px"}} className="bx--row search-page__result2">
                <SearchResult 
                        title="Food Drive"
                        canHelp="true"
                        distance="8 miles"
                        completion="45%"
                        about="Looking for as many canned goods as we can gather."
                    />
                </div>
                <div style={{marginLeft: "30px", marginBottom: "20px"}} className="bx--row search-page__result3">
                    <SearchResult 
                        title="Nursing Home"
                        canHelp="false"
                        distance="3.4 miles"
                        completion="10%"
                        about="Food and water needed to feed our patients, please message us if you can help!"
                    />
                </div>
            </div>
            </div>
        )
}

export default SearchPage