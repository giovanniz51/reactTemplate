import React from "react";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import "./footer.css";

const Footer = () => {
    return (
        <Grid fluid={true} className="footer">
            <Row>
                <Col xs={4}>
                    <ul>
                        <img className="img-responsive" width="200" src="/images/react-icon.svg"/>
                    </ul>
                </Col>
                <Col xs={4}>
                    <ul>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Info</li>
                        <li>Opening Hours</li>
                    </ul>
                </Col>
                <Col xs={4}>
                    <ul>
                        <li>Contact</li>
                        <li>Contact</li>
                        <li>Contact</li>
                        <li>Contact</li>
                    </ul>
                </Col>
            </Row>
        </Grid>
    )
}

export default Footer;