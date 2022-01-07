import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import OnlyCharter from '../../components/OnlyCharter';

export default function Charter(params) {
  const router = useRouter()
  const apiURL = `https://rickandmortyapi.com/api/character/${router.query.id}`;

  const [data, setData] = useState()

  useEffect(() => {
    const charter = async () => {
      let res = await fetch(apiURL);
      let response = await res.json();
      setData(response)
    }
    charter()
  }, [apiURL])

  if (data === undefined) {
    return (
      <Layout>
        Loading...
      </Layout>
    )
  } else {
    return (
      <Layout>
        <OnlyCharter />
      </Layout>
    )
  }


}
