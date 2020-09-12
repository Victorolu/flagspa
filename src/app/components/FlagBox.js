import React from 'react'
import { Col, Image } from 'react-bootstrap'

const FlagBox = ({item, handleShow}) => {
    return (
        <Col lg={3} className="mb-3 image" onClick={() => handleShow(item)}><Image src={item.flag}></Image></Col>
    );
}

export default FlagBox