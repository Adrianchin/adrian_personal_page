import React from 'react';
import { Container, Row, Col, Stack } from "react-bootstrap";
import ContactBackground from "./ContactBackground/ContactBackground";
import Footer from "./Footer/Footer";

function Contact () {

    return (
        <section>
            <ContactBackground/>
            <Container className="contactcontainer column2">
                <Footer/>
            </Container>
        </section>
    );
}

export default Contact;