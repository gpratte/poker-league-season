import React from 'react'
import './Season.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Details from './Details'

const Season = ({ season }) => (
  <div>
    <Details/>

    <Tabs className="style1" defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab className="style2" eventKey="quarters" title="&nbsp;&nbsp;&nbsp;Quarters&nbsp;&nbsp;&nbsp;">
        <h1>Quarters</h1>
      </Tab>
      <Tab className="style2" eventKey="games" title="&nbsp;&nbsp;&nbsp;Games&nbsp;&nbsp;&nbsp;">
        <h1>Games</h1>
      </Tab>
    </Tabs>
  </div>
)

export default Season
