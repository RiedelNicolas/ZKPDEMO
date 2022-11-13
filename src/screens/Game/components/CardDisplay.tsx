import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'

interface CardDisplayProps {
    imagen1: string
    imagen2: string
}

export const CardDisplay = ( {imagen1,imagen2} : CardDisplayProps) => {
    const id = "1";
  return (
    <Row className='d-flex justify-content-center'>
       <Col lg="3" md="4" xs="6">
            <Card>
                <Image
                 src={imagen1}
                 fluid
                 thumbnail
                />
            </Card>
        </Col>
        <Col lg="3" md="4" xs="6">
            <Card>
                <Image 
                    src={imagen2}
                    fluid
                    thumbnail
                />
            </Card>
        </Col>
    </Row>
  )
}