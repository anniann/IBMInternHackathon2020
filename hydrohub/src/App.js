import React from 'react';
import './app.scss';
import UIShell from "./components/UIShell";
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Route, Switch } from 'react-router-dom';
import OrgDashboard from './content/OrgDashboard'
import './content/OrgDashboard/org-dashboard.scss'

function App() {
  return (
    <div className="App">
      <UIShell />
      <Content>
        <OrgDashboard />
      </Content>
    </div>
  );
}

export default App;
