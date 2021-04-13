import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import '../styles/Vaccinenews.css';
import VaccineNews from '../data/vaccinenews.json'

function Vaccinenews(){
    return(
        <div>
            <Row>
                {VaccineNews.map((vaccineCard, index)=>(
                    <Col sm="4" className='card-margin'>
                        <Card>
                            <CardImg height="150" src={vaccineCard.image} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5"><a target='_blank' href={vaccineCard.url}>{vaccineCard.title}</a></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{vaccineCard.subtext}</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Vaccinenews; 