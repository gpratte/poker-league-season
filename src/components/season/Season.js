import React from 'react'
import './Season.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Details from './Details'

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
              <Card.Body><Details value={season}/></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Tabs className="style1" defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab className="style2" eventKey="quarters" title="&nbsp;&nbsp;&nbsp;Quarters&nbsp;&nbsp;&nbsp;">
            <h1>Quarters</h1>
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
