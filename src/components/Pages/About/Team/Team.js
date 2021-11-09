import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamMember from "./TeamMember/TeamMember";


const teamMembers = [
    {
        name: "James Grady",
        title: "Founder",
        img: "http://zcube.in/navirego/img/team/team_img06.png"
    },
    {
        name: "Nashid Martines",
        title: "CEO",
        img: "http://zcube.in/navirego/img/team/team_img01.png"
    },
    {
        name: "Hackson Willing",
        title: "Developer",
        img: "http://zcube.in/navirego/img/team/team_img03.png"
    },
    {
        name: "Konne Backfield",
        title: "Founder",
        img: "http://zcube.in/navirego/img/team/team_img02.png"
    },
]



const Team = () => {

    return (
        <>
            <Container className="py-5">
                <h2 className="text-center fs-1">
                    Our <span className="colored-text">Expert Team</span>
                </h2>
                <Row xs={1} md={2} lg={4} className="g-4 mt-3">
                    {teamMembers.map((member) => (
                        <Col key={member._id}>
                            <TeamMember member={member}></TeamMember>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Team;
