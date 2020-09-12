import React from 'react'
import { Container } from 'react-bootstrap'
import TypeWriter from '../components/TypeWriter'
import ThemeToggle from '../components/ThemeToggle'

const FunFacts = ({isDarkTheme, handleOnThemeChange}) => {
    const typewriterStrings = [
        "Hello and welcome to <strong>Know Your Countries<strong>",
        "Take the time to learn about new things about countries around the world",
        "To help juice up with your learning, here are some fun facts about some countries......hope you enjoy!",
        "About a quarter of all overseas nurses come from the Philippines, making it the world’s top supplier of nurses.",
        "Everyone who lives in Germany, even foreigners, can attend college tuition-free.",
        "France is the most visited country in the world with 89 million annual tourists.",
        "Myanmar country is one of only three in the world, along with Liberia and the United States, that does not use the metric system.",
        "Uganda is a birder’s paradise. With more than 1,000 species, it contains 60 percent of Africa’s birds and 11 percent of the world’s avian population.",
        "To find out more country facts click on this <a href='https://www.farandwide.com/s/fascinating-facts-every-country-7c1f1a0efdf64979'>link</a> :)"

    ]

    return (
        <Container className={`${isDarkTheme ? "bg-dark": ""}`}>
            <TypeWriter typewriterStrings={typewriterStrings}/>
            <ThemeToggle isDarkTheme={isDarkTheme} handleOnThemeChange={handleOnThemeChange}/>
        </Container>
    )
}

export default FunFacts