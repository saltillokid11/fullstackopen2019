import React, { useState, useEffect } from 'react'
import './App.css';
// import Country from './components/Country'
import Countries from './components/Countries'
import ShowContries from './components/ShowCountries'
import Search from './components/Search'
import axios from 'axios'

function App(props) {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setcountrySearch] = useState('');

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const filterCountries = countries.filter(c => {
    return c.name.search(new RegExp(countrySearch, "i")) >= 0
  });


  const handleSearchChange = (event) => {
    setcountrySearch(event.target.value);
  }
  
  return (
    <div className="top">
      <div>
        <Search handleSearchChange={handleSearchChange} />
      </div>
      <div className="results">
        <ShowContries
          filterCountries={filterCountries}
          countrySearch={countrySearch}
        />
      </div>
    </div>
  );
}

export default App;
