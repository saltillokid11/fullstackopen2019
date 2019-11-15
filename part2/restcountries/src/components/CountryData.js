import React from 'react'
import WeatherData from './WeatherData'

const CountryData = ({country}) => {

    const details = country.map(country => {
        const languages = country.languages.map(lang => {
            return(
                <div key={lang.name}>
                    <li>{lang.name}</li>
                </div>
            )
        })

        return(
            <div key={country.numericCode}>
                <h1>{country.name}</h1>
                <div>capital: {country.capital}</div>
                <div>population: {country.population}</div>
                <h2>Languages</h2>
                <ul>{languages}</ul>
                <img src={country.flag} alt={country.name} height="100px"/>
                <div><WeatherData country={country} /></div>
            </div>
        )
    })
    
    return (
        <div>
            {details}
        </div>
    )
}

export default CountryData