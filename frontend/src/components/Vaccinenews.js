import React from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import '../styles/Vaccinenews.css';
// import VaccineNews from '../data/vaccinenews.json'


class Vaccinenews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            VaccineNews: []
        }
    }

    componentDidMount(){
          axios.get("/getVaccineNews")//check this line need to use the 
          .then((response)=> {
              console.log(response.data);
              
              console.log('test');

              this.setState({
                  VaccineNews: response.data
              })
          })
    }

    render(){
        return(
            <div>
                <h1 className='center'>
                    Vaccine News
                </h1>
                <Row>
                    {this.state.VaccineNews.map((vaccineCard, index)=>(
                        <Col sm='4' key={index}>
                            <Card className='card-style'>
                                {/* <CardImg height="150" src={vaccineCard.image} alt="Article Image" /> */}
                                <CardBody>
                                <CardTitle tag="h5"><a target='_blank' rel="noreferrer" href={vaccineCard.url}>{vaccineCard.text}</a></CardTitle>
                                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{vaccineCard.subtext}</CardSubtitle> */}
                                {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
export default Vaccinenews;