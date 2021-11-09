import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBlog from "./SingleBlog/SingleBlog";

const blogs = [
    {
        _id: 1,
        title: "Importers Achieve Cost Savings Through The First Sale Rule!",
        description: "The trade war currently ensuing between the US and several nations around the globe, most fiercely with China, shows no signs of the first set of tariffs levied against solar. In today’s international and remote locations, experience and understanding of logistics operations.",
        img: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/blog4.jpg"
    },
    {
        _id: 2,
        title: "Cargo Flow Through Better Supply Chain Visibility, Control.",
        description: "Focus can provide logistics personnel to meet the needs of your company or project. From logistics managers to warehousemen, logistics controllers to transport coordinators, we can assist you. We provide personnel for one-off projects as well as long or short-term agency personnel.",
        img: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/blog1.jpg"
    },
    {
        _id: 3,
        title: "Importance Of Specialized Focus In Projects, Oil & Gas Logistics?",
        description: "The key to the success of any logistics contract is good logistics management. The key to good management is the ability to identify the needs of the client and the countries in which the work will take place, as well as being in a position to advise the best way forward. ",
        img: "https://7oroof.com/tfdemos/optime/wp-content/uploads/2019/03/blog3.jpg"
    }
]


const Blogs = () => {

    return (
        <>
            <Container className="py-5 animate__animated animate__slideInUp animate__delay-2s">
                <h2 className="text-center fs-1">
                    Lates <span className="colored-text">Articles</span>
                </h2>
                <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                    {blogs.map((blog) => (
                        <Col key={blog._id}>
                            <SingleBlog blog={blog}></SingleBlog>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Blogs;
