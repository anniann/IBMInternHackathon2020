import React from "react"
import { Tile } from "carbon-components-react";
import { UnorderedList, ListItem } from "carbon-components-react";
import { ModalWrapper } from "carbon-components-react";
import AnalyticsNum from "../../components/AnalyticsNum";
import UIShell from "../../components/UIShell"
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import "./Transactions.scss";
import Button from "carbon-components-react/lib/components/Button";
import { Link,NavLink } from "react-router-dom";

var data = [
    {
      "id": 0,
      "name": "John Apple",
      "transactionType": "Donation Received",
      "country": "United Kingdom",
      "company": "Ovolo"
    },
    {
        "id": 1,
        "name": "Mayer Leonard",
        "transactionType": "Donation Received",
        "country": "United States",
        "company": "N/A"
    },
    {
        "id": 2,
        "name": "The ABC Company",
        "transactionType": "Donation Received",
        "country": "Canada",
        "company": "The ABC Company"
    },
    {
        "id": 3,
        "name": "The EFG Company",
        "transactionType": "Donation Received",
        "country": "Germany",
        "company": "The EFG Company"
    },
    {
        "id": 4,
        "name": "John Apple",
        "transactionType": "Donation Received",
        "country": "United Kingdom",
        "company": "Ovolo"
      },
      {
          "id": 5,
          "name": "Mayer Leonard",
          "transactionType": "Donation Received",
          "country": "United States",
          "company": "N/A"
      },
      {
          "id": 6,
          "name": "The ABC Company",
          "transactionType": "Donation Received",
          "country": "Canada",
          "company": "The ABC Company"
      },
      {
          "id": 7,
          "name": "The EFG Company",
          "transactionType": "Donation Received",
          "country": "Germany",
          "company": "The EFG Company"
      },
      {
        "id": 8,
        "name": "John Apple",
        "transactionType": "Donation Received",
        "country": "United Kingdom",
        "company": "Ovolo"
      },
      {
          "id": 9,
          "name": "Mayer Leonard",
          "transactionType": "Donation Received",
          "country": "United States",
          "company": "N/A"
      },
      {
          "id": 10,
          "name": "The ABC Company",
          "transactionType": "Donation Received",
          "country": "Canada",
          "company": "The ABC Company"
      },
      {
          "id": 11,
          "name": "The EFG Company",
          "transactionType": "Donation Received",
          "country": "Germany",
          "company": "The EFG Company"
      },
      {
        "id": 12,
        "name": "John Apple",
        "transactionType": "Donation Received",
        "country": "United Kingdom",
        "company": "Ovolo"
      },
      {
          "id": 13,
          "name": "Mayer Leonard",
          "transactionType": "Donation Received",
          "country": "United States",
          "company": "N/A"
      },
      {
          "id": 14,
          "name": "The ABC Company",
          "transactionType": "Donation Received",
          "country": "Canada",
          "company": "The ABC Company"
      },
      {
          "id": 15,
          "name": "The EFG Company",
          "transactionType": "Donation Received",
          "country": "Germany",
          "company": "The EFG Company"
      },

  ];

const Transactions = () => {
        return (
            <div className="th-list">
            <UIShell />
            <Griddle data={data}
            plugins={[plugins.LocalPlugin]}  >
            <RowDefinition>
                <ColumnDefinition id="id" title="id" width={200} />
                <ColumnDefinition id="name" title="Name" width={200} />
                <ColumnDefinition id="transactionType" title="Transacion Type"  width={200}/>
                <ColumnDefinition id="country" title="Country" width={200} />
                <ColumnDefinition id="company" title="Company"  width={200}/>
            </RowDefinition>  
            </Griddle> 
            <Button kind="tertiary">
              {" "}
              <Link style={{ fontWeight: "bold", color: "#4287f5"}}> Dispute a Transaction </Link>
            </Button>{" "} 
            </div>
            
        )
}

export default Transactions