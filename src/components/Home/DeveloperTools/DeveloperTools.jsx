import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
import ProfessionalTools from "../Other/ProfessionalTools";

function DeveloperTools () {
    
    return (    
        
        <Container fluid className="generalcontainer1">
            <Row className="generalrow1">
                <div className={"generaldiv"} >
                    <Row>
                        <h1 className="generaltitle1">
                            Developer Tools
                        </h1>
                    </Row>
                    <Row>
                    <Col className="column1 ">
                            <ProfessionalTools/>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default DeveloperTools;