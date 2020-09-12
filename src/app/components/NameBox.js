import React from 'react'
import { Col } from 'react-bootstrap'

const NameBox = ({ item, handleShow }) => {
    return (
        <Col lg={4} className="mb-3 image" onClick={() => handleShow(item)}><h3 className="name">{item.name}</h3></Col>
    );
}

export default NameBox