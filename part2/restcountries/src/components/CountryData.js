import React from 'react'

const CountryData = ({filterCountries}) => {
    const details = filterCountries.map(country => {
        const languages = country.languages.map(lang => {
            return(
                <div key={country.numericCode}>
                    <li>{lang.name}</li>
                </div>
            )
        })

        return(
            <div key={country.numericCode}>
                <h1>{country.name}</h1>
                <div>capital: {country.capital}</div>
                <div>population: {country.population}</div>
                <h2>lanuages</h2>
                <ul>{languages}</ul>
                <img src={country.flag} alt={country.name} height="100px"/>
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