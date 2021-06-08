import React from 'react';
import axios from 'axios';
import {
    Card, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';
import '../styles/Vaccinenews.css';


class Vaccinenews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            VaccineNews: []
        }
    }

    componentDidMount(){
          axios.get("/getVaccineNews")
          .then((response)=> {
              console.log(response.data);
              this.setState({
                  VaccineNews: response.data
              })
          })
    }

    render(){
        return(
            <div>
                <h1>
                    Vaccine News
                </h1>
                <Row>
                    {this.state.VaccineNews.map((vaccineCard, index)=>(
                        <Col sm='4' key={index}>
                            <Card className='card-style'>
                                <CardBody>
                                    <CardTitle tag="h5"><a target='_blank' rel="noreferrer" href={vaccineCard.url}>{vaccineCard.text}</a></CardTitle>
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