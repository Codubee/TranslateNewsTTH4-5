import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Hannah from '../images/teams-pics/Hannah.jpg';
import Lillie from '../images/teams-pics/Lillie.jpg';
import Jose from '../images/teams-pics/Jose.png';
import Kirtan from '../images/teams-pics/Kirtan.png';
import Aru from '../images/teams-pics/Aru.png';
import '../styles/Team.css';
function Team() {

  //Teammate constructor
  function Teammate(name, year, major, univ, pic) {
      this.name = name;
      this.year = year;
      this.major = major;
      this.univ = univ;
      this.pic = pic;
    }
  
  //list of teammates
  var team = [ new Teammate('Hannah ', 'Junior', 'Computer Science', 'The University of Texas at Dallas', Hannah),
                new Teammate('Aru', 'Feshman', 'Computer Science', 'The University of Texas at Dallas', Aru), 
                new Teammate('Kirtan', 'Junior', 'Computer Science', 'The University of Texas at Dallas', Kirtan), 
                new Teammate('Lillie', 'Freshman', 'Computer Science', 'The University of Texas at Dallas', Lillie), 
                new Teammate('Jose', 'Junior', 'Computer Science', 'The University of Texas at Rio Grande Valley', Jose), ];

  return ( 
    <div classname='center'> 
      <h1 className='team-header'>Meet the Team</h1>
      <Row>
        {team.map((teammate, index) => (       //create card for each teammate with map function on team array
        <Col md='3' sm='12'>
          <Card  className="teammate-card center" key={index}>
          <CardImg className='teammate-pic' src={teammate.pic}/>
          <CardBody className='teammate-card-body'>
            <CardTitle className="center" tag="h5">{teammate.name}</CardTitle>
            <CardSubtitle tag="h6" className="center mb-2 text-muted">{teammate.year}</CardSubtitle>
            <CardSubtitle tag="h6" className="center mb-2 text-muted">{teammate.major}</CardSubtitle>
            <CardSubtitle tag="h6" className="center mb-2 text-muted">{teammate.univ}</CardSubtitle>
          </CardBody>
        </Card>
        </Col>
        ))}
    
      </Row>
    </div>

  );
};

export default Team;
