import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountryModal from '../modals/CountryModal'
import NameBox from '../components/NameBox'
import Loader from '../components/Loader'

const CountriesByName = ({ countryFilter, isDarkTheme, isError, error, isLoading, countries }) => {

    const [show, setShow] = useState(false)
    const [country, setCountry] = useState()

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setCountry(item);
        setShow(true);
    }


    return (
        <Container fluid className="p-5">
            <Row className={`p-5 ${isLoading ? "justify-content-center" : "justify-content-between"} ${isDarkTheme ? "bg-dark" : "bg-light"}`}>
                {isLoading
                    ? <Loader />
                    : isError
                        ? <Col>Error: {error}</Col>
                        : countries.filter(x => x.name.toLowerCase().startsWith(countryFilter)).map((item, key) =>
                            <NameBox key={key} item={item} handleShow={handleShow} />
                        )
                }
            </Row>
            {show && <CountryModal isDarkTheme={isDarkTheme} show={show} handleClose={handleClose} country={country}></CountryModal>}
        </Container>
    );
}

export default CountriesByName