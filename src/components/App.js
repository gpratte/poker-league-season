import React from 'react';
import './App.css';
import Season from './season/Season'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return <Container>
    <Row className="justify-content-center text-center">
      <Col>
        <Season/>
      </Col>
    </Row>
  </Container>;
}

export default App;
