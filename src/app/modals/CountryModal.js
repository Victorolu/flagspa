import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap'


const CountryModal = ({ show, handleClose, country, isDarkTheme }) => {

    return (
        <Modal className={`${isDarkTheme ? "dark-theme": ""}`} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title><Image src={country.flag}></Image>  {country.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Capital City: {country.capital} <br />
                    List of Currencies: <br />
                <ul>
                    {country.currencies.map((item, key) =>
                        <li key={key}>{item.name}  ({item.symbol})</li>
                    )}
                </ul>
                    List of Languages: <br />
                <ul>
                    {country.languages.map((item, key) =>
                        <li key={key}>{item.name}</li>
                    )}
                </ul>
                    Population Count: {country.population} <br />
                    Country ISO code: {country.alpha3Code} <br />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CountryModal