import React, { useState } from 'react'
import Navigation from './layout/Navigation'
import Router from './layout/Router'
import FunFacts from './layout/FunFacts'

const Layout = () => {
    const [countryFilter, setCountryFilter] = useState('')
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const handleOnTextChange = (value) => {
        setCountryFilter(value.toLowerCase());
    }

    const handleOnThemeChange = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <div className={isDarkTheme? "dark-theme": ""}>
            <Navigation isDarkTheme={isDarkTheme} handleOnTextChange={handleOnTextChange} />
            <FunFacts isDarkTheme={isDarkTheme} handleOnThemeChange={handleOnThemeChange}/>
            <Router isDarkTheme={isDarkTheme} countryFilter={countryFilter} />
        </div>
    );
}

export default Layout;