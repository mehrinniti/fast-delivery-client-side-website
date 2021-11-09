import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationArrow,
    faMobile,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./ContactDetails.css";

const ContactDetails = () => {
    return (
        <>
            <Container className="py-5 px-3">
                <Row>
                    <Col sm={6} md={4}>
                        <div className="d-flex justify-content-center gap-4 animate__animated animate__fadeInLeft">
                            <div>
                                <span>
                                    {" "}
                                    <FontAwesomeIcon
                                        className="fs-1 contact-details-icon"
                                        icon={faLocationArrow}
                                    />
                                </span>
                            </div>
                            <div>
                                <h4>ADDRESS</h4>
                                <p>
                                    Godenail, Narayanganj <br /> Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="d-flex justify-content-center gap-4 animate__animated animate__fadeInDown">
                            <div>
                                <span>
                                    {" "}
                                    <FontAwesomeIcon
                                        className="fs-1 contact-details-icon"
                                        icon={faMobile}
                                    />
                                </span>
                            </div>
                            <div>
                                <h4>PHONE</h4>
                                <p>+880 1944444477</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="d-flex justify-content-center gap-4 animate__animated animate__fadeInRight">
                            <div>
                                <span>
                                    {" "}
                                    <FontAwesomeIcon
                                        className="fs-1 contact-details-icon"
                                        icon={faEnvelope}
                                    />
                                </span>
                            </div>
                            <div>
                                <h4>EMAIL</h4>
                                <p>info@fastdelivery.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactDetails;
