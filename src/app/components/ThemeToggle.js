import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThemeToggle = ({ isDarkTheme, handleOnThemeChange }) => {

    return (
        <Row className="p-3 justfiy-content-center">
            <Col className="text-center">
                <p style={{fontSize: "25px"}}>
                    Toggle for {
                        isDarkTheme ? "Light Theme  " : "Dark Theme  "
                    }
                    <span><FontAwesomeIcon size="1x" onClick={handleOnThemeChange} icon={isDarkTheme ? ['fas', 'toggle-on'] : ['fas', 'toggle-off']} /></span>
                </p>
            </Col>
        </Row>
    )
}

export default ThemeToggle