import React from 'react';
import axios from 'axios';
import {
  Card, CardBody,
  CardTitle, Row, Col
} from 'reactstrap';
import "../styles/LocalNews.css";

class LocalNews extends React.Component {

  constructor(props){
    super(props)
    this.state = {news:[]}
  }

  componentDidMount(){
    axios.get("/getLocalNews")
          .then((response)=> {
              console.log(response.data);
              this.setState({
                news: response.data
              })
          })
  }

  render() {

    return (
      <div className="mt-sm">
        <h1>Local news</h1>
        <Row>
          {this.state.news.map((vaccineCard, index) => (
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
    );
  }
}

export default LocalNews;