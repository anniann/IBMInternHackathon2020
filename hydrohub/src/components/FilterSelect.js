import React from "react"
import { Select, SelectItem } from "carbon-components-react";

class FilterSelect extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Select
                defaultValue="placeholder-item"
                id="dashboard-filter"
                labelText="Filter"
            >
                <SelectItem
                    text="No Filter"
                    value="placeholder-item"
                />
                <SelectItem
                    text="Water"
                    value="water"
                />
                <SelectItem
                    text="Food"
                    value="food"
                />
                <SelectItem
                    text="Medical Supplies"
                    value="medical"
                />
                <SelectItem
                    text="Other"
                    value="other"
                />
            </Select>
        )
    }
}

export default FilterSelect;