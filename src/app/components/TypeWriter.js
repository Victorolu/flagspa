import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

const TypeWriter = ({typewriterStrings}) => {
    return (
        <Row className="p-3 justfiy-content-center">
            <Col className="text-center">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriterStrings.map(x =>
                            typewriter.changeDelay(100)
                                .typeString(x)
                                .pauseFor(5000)
                                .deleteAll(2)
                                .start())
                    }}
                    options={{
                        loop: true,
                    }}
                />
            </Col>
        </Row>
    )
}

export default TypeWriter