import React from 'react'
import Country from './Country'
import Search from './Search'

const ShowCountries = ({filterCountries, countrySearch}) => {
    let results = "";

    if(countrySearch.length == 0){
        return null;
    } else if(filterCountries.length > 10){
        return <div>Too many</div>
    } else if(filterCountries.length > 0 && filterCountries.length <= 10){
        results = filterCountries.map(country => {
            return (
                <Country 
                    key={country.numericCode} 
                    country={country.name}
                />
            )}
        )
    }

    return (
        <div>{results}</div>
    )

}

export default ShowCountries