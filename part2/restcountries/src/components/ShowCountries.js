import React from 'react'
import Country from './Country'
import CountryData from './CountryData'

const ShowCountries = ({filterCountries, countrySearch}) => {
    let results = "";

    if(countrySearch.length === 0){
        return null;
    } else if(filterCountries.length === 1) {
        return <CountryData filterCountries={filterCountries}/>
    } else if(filterCountries.length > 10){
        return <div>Too many matches, specify another filter</div>
    } else if(filterCountries.length > 0 && filterCountries.length <= 10){
        results = filterCountries.map(country => {
            return (
                <div key={country.numericCode}>
                    {/* <button onClick={ <CountryData filterCountries={filterCountries}/> }></button> */}
                    <Country 
                        country={country.name}
                    />
                </div>
            )}
        )
    }

    return (
        <div>{results}</div>
    )

}

export default ShowCountries