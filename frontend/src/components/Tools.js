import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../styles/Tools.css";

// Icons
import { ReactComponent as ReactIcon } from '../images/tool-icons/react-icon.svg';
import { ReactComponent as NodeIcon } from '../images/tool-icons/node-icon.svg';
import { ReactComponent as JiraIcon } from '../images/tool-icons/jira-icon.svg';
import { ReactComponent as PostmanIcon } from '../images/tool-icons/postman-icon.svg';
import { ReactComponent as AWSIcon } from '../images/tool-icons/aws-icon.svg';
import { ReactComponent as HerokuIcon } from '../images/tool-icons/heroku-icon.svg';

function Tools() {
    return (
        <div className="tools">
                <h1 className="tools-header">Built With</h1>
                
                <Container>
                    <Row xs="3">
                        <Col className="center"><ReactIcon className="tools-icon"/></Col>
                        <Col className="center"><NodeIcon className="tools-icon"/></Col>
                        <Col className="center"><JiraIcon className="tools-icon"/></Col>
                    </Row>
                    <Row xs="3">
                        <Col className="center"><PostmanIcon className="tools-icon"/></Col>
                        <Col className="center"><AWSIcon className="tools-icon"/></Col>
                        <Col className="center"><HerokuIcon className="tools-icon"/></Col>
                    </Row>
                </Container>
        </div>
    );
}

export default Tools;