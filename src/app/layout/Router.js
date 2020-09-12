import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import CountriesByFlag from '../pages/CountriesByFlag';
import CountriesByName from '../pages/CountriesByName';
import axios from 'axios'


const Router = ({countryFilter, isDarkTheme}) => {

    const [countries, setCountries] = useState([])
    const [error, setError] = useState()
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => {
                setCountries(res.data)
            })
            .catch(err => {
                setError(err)
                setIsError(true)
            }).finally(
                setIsLoading(false)
            )
        }, 3000)
    }, [])

    return (
        <Switch>
            <Route path="/" exact strict><CountriesByFlag isError={isError} error={error} isLoading={isLoading} countries={countries} isDarkTheme={isDarkTheme} countryFilter={countryFilter}/></Route>
            <Route path="/countriesbyflag" exact strict><CountriesByFlag isError={isError} error={error} isLoading={isLoading} countries={countries} isDarkTheme={isDarkTheme} countryFilter={countryFilter}/></Route>
            <Route path="/countriesbyname" exact strict><CountriesByName isError={isError} error={error} isLoading={isLoading} countries={countries} isDarkTheme={isDarkTheme} countryFilter={countryFilter}/></Route>
        </Switch>
    );
}

export default Router