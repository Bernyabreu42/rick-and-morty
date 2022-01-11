import React, { useState } from 'react';
import Searcher from './Searcher';
import Spinner from '../components/Spinner';

export default function Header() {

  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleChange = async (e) => {
    setKeyword(e.target.value)
    if (e.target.value.length >= 3) {

      const url = `https://rickandmortyapi.com/api/character/?name=${keyword}&`;

      let res = await fetch(url);
      if (!res.ok) {
        setError(true)
        throw ({
          error: !res.statusText ? "Ha ocurrido un Error" : res.statusText,
          status: res.status
        })
      }


      let response = await res.json();
      const { results } = response;
      setShowResults(true)
      setError(false)
      setData(results.slice(0, 5));

    } else {
      setShowResults(false)
      setKeyword({ keyword: "" })
    }

  }


  return (
    <>
      <div className='searcher' >
        <h1>Rick and Morty</h1>
        <h2>Find your Favorite character</h2>
        <form >
          <input type="search" onChange={(e) => handleChange(e)} />
        </form>
      </div>
      <div className={showResults ? 'search' : ""}>
        {
          (showResults) ? (data === null
            ? ""
            : error ? <span>No founds</span> : data.map(el => <Searcher key={el.id} props={el} />)
          ) : null
        }
      </div>
    </>
  )

}
