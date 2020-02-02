import React from 'react'
import './Season.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SeasonDetails from './SeasonDetails'
import Standings from '../common/Standings'
import Quarters from './Quarters'

class Season extends React.Component {
  render() {
    const season = this.props.value;
    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Details
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body><SeasonDetails value={season}/></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Standings value={season.players}/>

        <Tabs className="style1" defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="style2" eventKey="quarters" title="&nbsp;&nbsp;&nbsp;Quarters&nbsp;&nbsp;&nbsp;">
            <Quarters value={season.quarterlySeasons}/>
          </Tab>
          <Tab className="style2" eventKey="games" title="&nbsp;&nbsp;&nbsp;Games&nbsp;&nbsp;&nbsp;">
            <h1>Games</h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Season
