import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import "./style.scss"

export const Landing = () => {
  return (
    <Container id='LandingContainer'>
      <Row className='d-flex justify-content-center'>
        <Col xs="10">
          <Card>
            <Card.Header>
              <Card.Title>Ejemplo practico de ZKP</Card.Title>
            </Card.Header>
            <Card.Body>

              <Card.Text>
                Este es un ejemplo práctico de ZKP, en el cual se ejemplifica que un usuario puede demostrar a una entidad que dos imágenes son diferenciables sin dar información acerca de las mismas.
              </Card.Text>
              
              <Card.Text>
              Fue desarrollado como complemento al trabajo práctico de la materia Criptografía y Seguridad Informática, Facultad de Ingeniería, Universidad de Buenos Aires.
              </Card.Text>
              <Button variant="primary" href="/demo">Empezar</Button>
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                Grupo conformado por : Agustín Cambiano, Iván Soriano, Ezequiel Zbogar, Marcos Daniel Rolando y Nicolás Agustín Riedel.
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}