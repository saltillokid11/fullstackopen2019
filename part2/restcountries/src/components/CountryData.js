import React from 'react'

const CountryData = ({filterCountries}) => {
    const details = filterCountries.map(country => {
        const languages = country.languages.map(lang => {
            return(
                <div>
                    <li>{lang.name}</li>
                </div>
            )
        })

        return(
            <div>
                <h1>{country.name}</h1>
                <div>capital: {country.capital}</div>
                <div>population: {country.population}</div>
                <h2>lanuages</h2>
                <ul>{languages}</ul>
                <img src={country.flag} height="100px"/>
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