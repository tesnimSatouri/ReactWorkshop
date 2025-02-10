import React from "react";
import {Container , Row , Col , Card , Button} from "react-bootstrap";
import Event from "./Event";
import EventsData from "../events.json";

const Events = () => {
    return (
        <Container>
            <Row>
                {EventsData.map((event) => (
                    <Col md={4} key={event.name}>
                        <Event data={event} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Events;