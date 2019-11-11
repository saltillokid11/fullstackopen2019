import React from 'react'

const Search = (props) => {
    return (
        <div>
            <div>find countries</div> 
            <input onChange={ props.handleSearchChange }/>
        </div>
    )
}

export default Search