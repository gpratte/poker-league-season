import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SeasonConnector from '../connectors/SeasonConnector'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <SeasonConnector/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
