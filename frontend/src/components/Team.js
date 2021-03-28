import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Container
} from 'reactstrap';
import Hannah from '../images/teams-pics/Hannah.jpg';
import Lillie from '../images/teams-pics/Lillie.jpg';
import Jose from '../images/teams-pics/Jose.png';
import Kirtan from '../images/teams-pics/Kirtan.png';
import '../styles/Team.css';
const Team = (props) => {

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
                 new Teammate('Aru', 'Sophomore', 'Computer Science', 'The University of Texas at Dallas', Lillie), 
                 new Teammate('Kirtan', 'Junior', 'Computer Science', 'The University of Texas at Dallas', Kirtan), 
                 new Teammate('Lillie', 'Freshman', 'Computer Science', 'The University of Texas at Dallas', Lillie), 
                 new Teammate('Jose', 'Junior', 'Computer Science', 'The University of Texas at Rio Grande Valley', Jose), ];

  return ( 
    <div class='center container'> 
      <h1 className='header'>Meet the Team</h1>
      <Container style={{ display: 'inline-flex'}}>
        {team.map((teammate, index) => (       //create card for each teammate with map function on team array

        <Card  style={{ border: 'none'}}  className="card center" key={index}>
          <CardImg 
            style={{    height: '12rem', 
                        width:'12rem',
                        alt: "pic of student", 
                        borderRadius: '10rem' }} 
            src={teammate.pic}/>
          <CardBody style={{width: '13rem'}}>
            <CardTitle className="center" tag="h5">{teammate.name}</CardTitle>
            <CardSubtitle tag="h6" className="center mb-2 text-muted">{teammate.year}</CardSubtitle>
            <CardSubtitle tag="h6" className="center mb-2 text-muted">{teammate.major}</CardSubtitle>
            <CardSubtitle tag="h6" className="center mb-2 text-muted">{teammate.univ}</CardSubtitle>
          </CardBody>
        </Card>
        ))}
      </Container>
    </div>

  );
};

export default Team;
