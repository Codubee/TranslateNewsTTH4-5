import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import '../styles/Vaccinenews.css';
import VaccineNews from '../data/vaccinenews.json';

function Vaccinenews(){
    return(
        <div>
            <h1 className='center'>
                Vaccine News
            </h1>
            <Row>
                {VaccineNews.map((vaccineCard, index)=>(
                    <Col sm='4'>
                        <Card className='card-style'>
                            <CardImg height="150" src={vaccineCard.image} alt="Article Image" />
                            <CardBody>
                            <CardTitle tag="h5"><a target='_blank' href={vaccineCard.url}>{vaccineCard.title}</a></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{vaccineCard.subtext}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Vaccinenews; 