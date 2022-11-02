import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import logo from "../assets/MAGbank.jpg";
import appstore from "../assets/appstore.jpg";
import googleplay from "../assets/googleplay.jpg";

import "./Footer.scss";

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5">
                <Col xs={12} lg={6} className="text-lg-left mb-5 mb-lg-0">
                    <Image src={logo} />
                </Col>

                <Col xs={12} lg={4} className="mb-5-mb-lg-0" >
                    <Image src={appstore} />
                    <Image src={googleplay} className="mx-2" />
                </Col>

                <Col xs={12} lg={2} className="d-flex align-itens-center justify-content-center" >
                    <FontAwesomeIcon icon={faFacebookSquare} color="#7c7c7c" size="2x" className="mx-2" />
                    <FontAwesomeIcon icon={faTwitter} color="#7c7c7c" size="2x" className="mx-2" />
                    <FontAwesomeIcon icon={faYoutube} color="#7c7c7c" size="2x" className="mx-2" />
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;