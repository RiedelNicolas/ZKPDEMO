import React from 'react'
import { Modal, Button, Spinner, Row, Col } from 'react-bootstrap'

export const LoadingModal = () => {
  return (
    <Modal 
    show={true}       
    size="lg"
    centered
    >
        <Modal.Header>
        <Modal.Title>Mezclando imágenes ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className='d-flex justify-content-center'>
                <Col xs="auto">
                    <Spinner animation="grow"/>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
  )
}