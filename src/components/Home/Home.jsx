import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from './Type';
import mePicture from "../../information/pictures/me_picture.jpg";
import Fuji from "../../information/pictures/Fuji.png";

const Home = () => {
    return (
        <section>
            <Container fluid className="titlemain">
                <Row className="titlerow ">
                    <h1 className="titlemainname">
                        Adrian Chin
                    </h1>
                </Row>
            </Container>

            <Container fluid className="generalcontainer1">
                <Row className="generalrow1 ">
                    <div className={"generaldiv"} >
                        <Row>
                            <h1 className="generaltitle1">
                                About Me
                            </h1>
                        </Row>
                        <Row>
                            <Col md={4} className="aboutmehomebox" >
                                    <img 
                                    src={mePicture} 
                                    className="img-thumbnail"
                                    />
                            </Col>
                            <Col md={8} className="hellobox">
                                <h3 className="aboutmedesctiption">
                                        My name is
                                    <strong> Adrian Chin</strong>
                                </h3>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>

            <Container fluid className="generalcontainer1">
                <Row className="generalrow1">
                    <div className={"generaldiv"} >
                        <Row>
                            <h1 className="generaltitle1">
                                Projects
                            </h1>
                        </Row>
                        <Row>
                            <Col md={4} className="column1">
                                <img 
                                    src={Fuji} 
                                    className="img-fluid"
                                />
                                <h5 className="projecttitle">
                                    Hello!
                                </h5>
                                <p className="projectdescription">
                                    This is my project
                                </p>
                            </Col>
                            <Col md={4} className="column1">
                                <img 
                                    src={Fuji} 
                                    className="img-fluid"
                                />
                                <h5 className="projecttitle">
                                    Hello!
                                </h5>
                                <p className="projectdescription">
                                    This is my project
                                </p>
                            </Col>
                            <Col md={4} className="column1">
                                <img 
                                    src={Fuji} 
                                    className="img-fluid"
                                />
                                <h5 className="projecttitle">
                                    Hello!
                                </h5>
                                <p className="projectdescription">
                                    This is my project
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>

            <Container fluid className="generalcontainer1">
                <Row className="generalrow1">
                    <div style={{paddingTop: 50, paddingBottom: 50, paddingLeft: 70, paddingRight: 70,}} >
                        <Row>
                            <h1 className="generaltitle1">
                                Language
                            </h1>
                        </Row>
                        <Row>
                            <Col md={6} className="column1">
                                <p className="projectdescription">
                                    <strong> Adrian Chin</strong> My name is 
                                </p>
                            </Col>
                            <Col md={6} className="column1">
                                <p className="projectdescription">
                                    <strong> Adrian Chin</strong> My name is 
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>

            <Container fluid className="generalcontainer1">
                <Row className="generalrow1">
                    <div style={{paddingTop: 50, paddingBottom: 50, paddingLeft: 70, paddingRight: 70,}} >
                        <Row>
                            <h1 className="generaltitle1">
                                Education
                            </h1>
                        </Row>
                        <Row>
                            <Col md={6} className="column1">
                                <p className="projectdescription">
                                    <strong> Adrian Chin</strong> My name is 
                                </p>
                            </Col>
                            <Col md={6} className="column1">
                                <p className="projectdescription">
                                    <strong> Adrian Chin</strong> My name is 
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>

            <Container fluid className="generalcontainer1">
                <Row className="generalrow1">
                    <div style={{paddingTop: 50, paddingBottom: 50, paddingLeft: 70, paddingRight: 70,}} >
                        <Row>
                            <h1 className="generaltitle1">
                                GitHub
                            </h1>
                        </Row>
                        <Row>
                        <Col className="column1">
                                <p className="projectdescription">
                                    <strong> Adrian Chin</strong> My name is 
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
            
        </section>
    );
}

export default Home;