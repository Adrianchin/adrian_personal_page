import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from './Type';
import mePicture from "../../information/pictures/me_picture.jpg";
import Fuji from "../../information/pictures/Fuji.png";
import GithubCal from "./GithubCal";
import ProfessionalTools from "./ProfessionalTools";

const Home = () => {
    return (
        <section>
            <Container>
                <Row className="Row2">
                    <Container fluid className="generalcontainer1">
                        <Row className="generalrow1">
                            <div className={"generaldiv1 row1"} >
                                <Row>
                                    <h1 className="generaltitle1 row2">
                                        About Me
                                    </h1>
                                </Row>
                                <Row className="aboutmeinformation">
                                    <Col md={4} className="aboutmehomebox" >
                                            <img 
                                            src={mePicture} 
                                            className="img-thumbnail"
                                            />
                                    </Col>
                                    <Col md={8} className="hellobox">
                                        <h2 className="aboutmedesctiption">
                                        Highwood Pass is a mountain pass in Kananaskis Country, Alberta, Canada. It lies west of Mount Rae and Mount Arethusa of the Misty Range, south of the Elbow Pass. It lies within the Peter Lougheed Provincial Park on Alberta Highway 40. The Highwood River originates in the pass. 
                                        </h2>
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
                                        Languages
                                    </h1>
                                </Row>
                                <Row>
                                    <Col md={6} className="column1">
                                        <p className="projectdescription">
                                            <strong>English</strong>
                                        </p>
                                        <p className="projectdescription">
                                            Native N1
                                        </p>
                                    </Col>
                                    <Col md={6} className="column1">
                                        <p className="projectdescription">
                                            <strong>Japanese</strong>
                                        </p>
                                        <p className="projectdescription">
                                            Professionally Competent
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
                                            <strong>University of Calgary</strong>
                                        </p>
                                        <p className="projectdescription">
                                            Bachlor of Mechanical Engineering - 2019
                                        </p>
                                    </Col>
                                    <Col md={6} className="column1">
                                        <p className="projectdescription">
                                            <strong>InceptionU</strong>
                                        </p>
                                        <p className="projectdescription">
                                            Full Stack Development Program - 2022
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
                                        Developer Tools
                                    </h1>
                                </Row>
                                <Row>
                                <Col className="column1">
                                       <ProfessionalTools/>
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
                                       <GithubCal/>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </section>
    );
}

export default Home;