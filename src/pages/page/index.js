import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import Layout from '../../components/Layout';
import GetCharacters from '../../services/GetCharacters';

export default function Pages() {
  const [data, setData] = useState(null)
  const router = useRouter()

  const apiURL = `https://rickandmortyapi.com/api/character/?page=1}`;

  useEffect(() => {
    GetCharacters(apiURL).then(res => {
      setData(res)
    })
  }, [])


  if (data === null) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <section className="ListCards">
          {
            data.results.map(el => <Card key={el.id} props={el} />)
          }
        </section>
        <div className='pagination'>
          <button>Previus</button>
          <button onClick={() => router.push(`/page/${2}`)} >Next</button>
        </div>

      </Layout >
    )
  }
}
