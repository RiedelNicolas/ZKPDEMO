import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useLocation } from "wouter";
import "./style.scss"

export const SelectGame = () => {
  const [location, setLocation] = useLocation();
  const [game, setGame] = React.useState("1");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(game);
    setLocation(`/ZKPDEMO/Game/${game}`);
  }

  return (
    <Container id='SelectContainer'>
      <Row className='d-flex justify-content-center'>
        <Col md="8" xs="10">
          <Card>
            <Card.Header>
                <Card.Title>¿Qué tan distinguibles desea que sean las imágenes a comparar?</Card.Title>
            </Card.Header>
            <Card.Body>
                <Row className='d-flex justify-content-center'>
                    <Col xs="auto">
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="select">
                                <Form.Select
                                  value={game}
                                  onChange={(e) => setGame(e.target.value)}
                                >
                                    <option value ="1">Muy distinguibles</option>
                                    <option value="2">Fácilmente distinguibles</option>
                                    <option value="3">Difícilmente distinguibles</option>
                                    <option value="4">Humanamente indistinguibles</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center" controlId="button">
                                <Button variant="primary" type="submit">
                                    Seleccionar
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}