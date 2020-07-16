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
      "company": "Ovolo",
      "date": "1 June 2020"
    },
    {
        "id": 1,
        "name": "Mayer Leonard",
        "transactionType": "Donation Received",
        "country": "United States",
        "company": "N/A",
        "date": "2 June 2020"
    },
    {
        "id": 2,
        "name": "The ABC Company",
        "transactionType": "Donation Received",
        "country": "Canada",
        "company": "The ABC Company",
        "date": "3 June 2020"
    },
    {
        "id": 3,
        "name": "The EFG Company",
        "transactionType": "Donation Received",
        "country": "Germany",
        "company": "The EFG Company",
        "date": "4 June 2020"
    },
    {
        "id": 4,
        "name": "John Apple",
        "transactionType": "Donation Received",
        "country": "United Kingdom",
        "company": "Ovolo",
        "date": "5 June 2020"
      },
      {
          "id": 5,
          "name": "Mayer Leonard",
          "transactionType": "Donation Received",
          "country": "United States",
          "company": "N/A",
          "date": "6 June 2020"
      },
      {
          "id": 6,
          "name": "The ABC Company",
          "transactionType": "Donation Received",
          "country": "Canada",
          "company": "The ABC Company",
          "date": "7 June 2020"
      },
      {
          "id": 7,
          "name": "The EFG Company",
          "transactionType": "Donation Received",
          "country": "Germany",
          "company": "The EFG Company",
          "date": "8 June 2020"
      },
      {
        "id": 8,
        "name": "John Apple",
        "transactionType": "Donation Received",
        "country": "United Kingdom",
        "company": "Ovolo",
        "date": "9 June 2020"
      },
      {
          "id": 9,
          "name": "Mayer Leonard",
          "transactionType": "Donation Received",
          "country": "United States",
          "company": "N/A",
          "date": "10 June 2020"
      },
      {
          "id": 10,
          "name": "The ABC Company",
          "transactionType": "Donation Received",
          "country": "Canada",
          "company": "The ABC Company",
          "date": "11 June 2020"
      },
      {
          "id": 11,
          "name": "The EFG Company",
          "transactionType": "Donation Received",
          "country": "Germany",
          "company": "The EFG Company",
          "date": "12 June 2020"
      },
      {
        "id": 12,
        "name": "John Apple",
        "transactionType": "Donation Received",
        "country": "United Kingdom",
        "company": "Ovolo",
        "date": "13 June 2020"
      },
      {
          "id": 13,
          "name": "Mayer Leonard",
          "transactionType": "Donation Received",
          "country": "United States",
          "company": "N/A",
          "date": "14 June 2020"
      },
      {
          "id": 14,
          "name": "The ABC Company",
          "transactionType": "Donation Received",
          "country": "Canada",
          "company": "The ABC Company",
          "date": "15 June 2020"
      },
      {
          "id": 15,
          "name": "The EFG Company",
          "transactionType": "Donation Received",
          "country": "Germany",
          "company": "The EFG Company",
          "date": "16 June 2020"
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
                <ColumnDefinition id="transactionType" title="Transaction Type"  width={200}/>
                <ColumnDefinition id="country" title="Country" width={200} />
                <ColumnDefinition id="company" title="Company"  width={200}/>
                <ColumnDefinition id="date" title="Date Processed"  width={200}/>
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