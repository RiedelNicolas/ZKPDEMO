import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from "wouter";
import "./style.scss"

export const NotFound = () => {
  const [location, setLocation] = useLocation();
  const goHome = () => {
    setLocation("/ZKPDEMO");
  }
  
  return (
    <Container id='NotFoundContainer'>
    <Row className='d-flex justify-content-center'>
      <Col xs="10">
        <Card>
          <Card.Header>
            <Card.Title>404 Not Found!</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className='d-flex justify-content-center'>
                <Col xs="auto">
                  <Button variant="primary" onClick={goHome}>
                    Ir a home
                  </Button>
                </Col>
              </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}