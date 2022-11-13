import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { CardDisplay } from './components/CardDisplay'
import { LoadingModal } from './components/LoadingModal'
import { useLocation } from "wouter";
import "./style.scss"

interface GameProps {
    id: string
}

const renderInfo = (aciertos:number) => {
    if (aciertos === 0) {
        return (
            <p></p>
        )
    }else if (aciertos > 0) {
        return (
           <p>
                {`Hasta el momento se puede decir con un`} <b>{` ${(1-Math.pow(1/2,aciertos))*100}% de seguridad `}</b>{`que usted puede diferenciar las imagenes`}
            </p>
        )
    }else{
        return (
            <p>Usted <b>no puede</b> diferenciar las imagenes</p>
        )
    }
}

export const Game = ({id}:GameProps) => {

    const [cambiaron, setCambiaron] = React.useState(false);
    const [location, setLocation] = useLocation();

    const [imagen1, setImagen1] = React.useState(`${process.env.PUBLIC_URL}/images/${id}/a.jpg`);
    const [imagen2, setImagen2] = React.useState(`${process.env.PUBLIC_URL}/images/${id}/b.jpg`);

    const [playing, setPlaying] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [aciertos, setAciertos] = React.useState(0);

    const volver = () => {
        setLocation("/ZKPDEMO/SelectGame");
    };

    const jugar = () => {
        setPlaying(true);
        setLoading(true);
        setTimeout(() => {
            const random = Math.random();
            if(random > 0.5){
                const aux = imagen1;
                setImagen1(imagen2);
                setImagen2(aux);
                setCambiaron(true);
            }else{
                setCambiaron(false);
            }
            setLoading(false);
        }, 1500);
    }

    const opcionNo= () => {
        if(!cambiaron){
            setAciertos(aciertos+1);
            jugar();
        }else{
            setAciertos(-1);
        }
    }

    const opcionSi= () => {
        if(cambiaron){
            setAciertos(aciertos+1);
            jugar();
        }else{
            setAciertos(-1);
        }
    }

    if(loading){
        return (
            <LoadingModal/>
        )
    }

    if(aciertos < 0){
        return (
            <Container id='GameContainer'>
                <Row className='d-flex justify-content-center'>
                    <Col md="10" xs="12">
                        <Card>
                            <Card.Header id="badHeader">
                                <Card.Title>Usted no puede diferenciar las imágenes</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Si quiere volver a intentar, presione el botón de abajo.
                                </Card.Text>
                                <Row className='d-flex justify-content-center buttonContainer'>
                                    <Col xs="auto">
                                        <Button variant="primary" onClick={volver}>Volver</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    if(!playing) {
        return (
            <Container id='GameContainer'>
                <Row className='d-flex justify-content-center'>
                    <Col md="10" xs="12">
                        <Card>
                        <Card.Header>
                            <Card.Title>Pruebe que puede diferenciar las imágenes</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Observe las imagenes con cuidado, luego presione el botón "Avanzar" para ver si puede diferenciarlas.
                            </Card.Text>
                            <CardDisplay
                                imagen1={imagen1}
                                imagen2={imagen2}
                            />
                            <Row className='d-flex justify-content-center buttonContainer'>
                                <Col xs="auto">
                                    <Button variant="primary" onClick={jugar}>Avanzar</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }else{
        return(
            <Container id='GameContainer'>
            <Row className='d-flex justify-content-center'>
                <Col md="10" xs="12">
                    <Card>
                    <Card.Header>
                        <Card.Title>¿Han cambiado las imágenes de lugar?</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <CardDisplay
                            imagen1={imagen1}
                            imagen2={imagen2}
                        />
                        <Row className='buttonContainer d-flex justify-content-center'>
                            <Col xs="auto">
                                <Button variant="danger" onClick={opcionNo}>No cambiaron</Button>
                                <Button variant="primary" onClick={opcionSi}>Cambiaron</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text>
                            {renderInfo(aciertos)}
                        </Card.Text>
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        )
    }
 
}