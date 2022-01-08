import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import OnlyCharacter from '../../components/OnlyCharacter';
import Spinner from '../../components/Spinner';

export default function Charter() {
  const router = useRouter();
  const apiURL = `https://rickandmortyapi.com/api/character/${router.query.id}`;

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const charter = async () => {
      let res = await fetch(apiURL);

      try {
        if (!(res.ok)) {
          throw ({
            err: res.statusText,
            status: res.status
          })
        }

        let response = await res.json();
        setData(response)
        setIsPending(false)
        setError(false)
      } catch (error) {
        setIsPending(true)
        setError({ err: "Ha ocurrido  un error" })
      }
    }
    charter()
  }, [apiURL])


  if (data === null) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <OnlyCharacter key={data.id} props={data} />
        <div className='pagination'>
          <button onClick={() => router.query.id <= 1 ? "" : router.push(`/characters/${+router.query.id - 1}`)}>Previus</button>
          <button onClick={() => router.query.id <= 1 ? "" : router.push(`/characters/${Math.floor(Math.random() * 826)}`)}>Random</button>
          <button onClick={() => router.query.id >= 826 ? "" : router.push(`/characters/${+router.query.id + 1}`)} >Next </button>
        </div>
      </Layout>
    )
  }


}
