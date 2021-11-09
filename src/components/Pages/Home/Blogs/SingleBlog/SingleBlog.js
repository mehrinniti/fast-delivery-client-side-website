import React from "react";
import { Card } from "react-bootstrap";
const SingleBlog = ({ blog }) => {
    const { _id, title, description, img } = blog;
    return (
        <>
            <Card className="h-100 shadow">
                <div className="overflow-hidden service-img">
                    <Card.Img className="img-fluid " variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title className="fs-5">{title}</Card.Title>
                    <Card.Text className="description">
                        {description}
                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    );
};

export default SingleBlog;
