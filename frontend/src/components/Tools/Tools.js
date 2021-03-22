import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./Tools.css";

// Icons
import { ReactComponent as ReactIcon } from './res/react-icon.svg';
import { ReactComponent as NodeIcon } from './res/node-icon.svg';
import { ReactComponent as JiraIcon } from './res/jira-icon.svg';
import { ReactComponent as PostmanIcon } from './res/postman-icon.svg';
import { ReactComponent as AWSIcon } from './res/aws-icon.svg';
import { ReactComponent as HerokuIcon } from './res/heroku-icon.svg';

function Tools() {
    return (
        <div className="tools">
                <h1 className="tools-header">Built With</h1>
                
                <Container>
                    <Row xs="3">
                        <Col className="center"><ReactIcon /></Col>
                        <Col className="center"><NodeIcon /></Col>
                        <Col className="center"><JiraIcon /></Col>
                    </Row>
                    <Row xs="3">
                        <Col className="center"><PostmanIcon /></Col>
                        <Col className="center"><AWSIcon /></Col>
                        <Col className="center"><HerokuIcon /></Col>
                    </Row>
                </Container>
        </div>
    );
}

export default Tools;