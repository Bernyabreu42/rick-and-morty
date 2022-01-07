import { useState, useEffect } from 'react'

const apiURL = `https://rickandmortyapi.com/api/character`;
export default function GetCharacters() {


  const getData = async (url) => {
    let res = await fetch(url);

    try {
      if (!(res.status === 200)) {
        throw ({
          err: !res.statusText ? "Ha ocurrido un error" : res.statusText,
          status: res.status
        });
      }

      let { info, results } = await res.json();
      return { info, results }
    } catch (err) {
      console.error(err);
    }
  }
  return getData(apiURL);

}
