import React from 'react'

const Countries = (props) => {
    let message = "";
    return (
        <div>{props.country.name}</div>
    )

    // if(props.searchResult.length > 10){
    //     return (
    //         <div>"Too many matches, specify another filter"</div>
    //         )
    //     message = "Too many matches, specify another filter";
    // } else{
    //     return (
    //         <div>{props.country.name}</div>
    //     )
    // }



}

export default Countries