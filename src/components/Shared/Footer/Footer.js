import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGithub,
    faTwitter,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
    faLocationArrow,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../images/delivery-truck-1.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://evening-harbor-37190.herokuapp.com/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            });
    }, []);
    return (
        <Container fluid className="footer-section pt-5">
            <Container>
                <Row className="g-4">
                    <Col lg={4}>
                        <div className=" animate__animated animate__fadeInLeft">
                            <img className="w-50" src={logo} alt="" />
                        </div>
                        <div className="mt-4 border-top py-3">
                            <div className="d-sm-flex gap-3 text-white fs-5 footer-contact">
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <p>+880 1944444477</p>
                            </div>
                            <div className="d-sm-flex gap-3 text-white fs-5 footer-contact">
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <p>info@fastdelivery.com</p>
                            </div>
                            <div className="d-sm-flex gap-3 text-white fs-5 footer-contact">
                                <span>
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                </span>
                                <p>
                                    Godenail, Narayanganj <br /> Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <h3 className="" style={{ color: "#edf6f9" }}>
                                Industries
                            </h3>
                            <div className="my-3 border-top pt-3 text-white industries">
                                <ul>

                                    <p>Retail & Consumer</p>
                                    <p>Sciences & Healthcare</p>
                                    <p>Industrial & Chemical</p>
                                    <p>Power Generation</p>
                                    <p>Food & Beverage</p>
                                    <p>Oil & Gas</p>

                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <h3 className="" style={{ color: "#edf6f9" }}>
                                Social Links
                            </h3>
                            <div className="border-top pt-3 mt-3 footer-social-links">
                                <a
                                    className="social-links"
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a
                                    className="social-links"
                                    href="https://github.com/mehrinniti"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a
                                    className="social-links"
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a
                                    className="social-links"
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="border-top py-2 mt-3">
                    <p style={{ color: " #edf6f9" }} className="text-center">
                        &copy;2021 - All right reserved || Design & Developed by Niti
                    </p>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;
