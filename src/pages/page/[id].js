import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Spinner from "../../components/Spinner";
import Layout from '../../components/Layout';
import Card from '../../components/Card';

export default function Page() {

  const router = useRouter()





  const [apiURL, setApiURL] = useState(`https://rickandmortyapi.com/api/character/?page=${router.query.id}`)
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getPage = async () => {
      let res = await fetch(apiURL);
      try {
        if (!(res.ok)) {
          throw ({
            err: !res.statusText ? "Ha ocurrido un error" : res.statusText,
            status: res.status
          })
        }

        let response = await res.json();
        const { next, prev } = response.info;
        const { results } = response;
        setData({ next, prev, results })
        setIsPending(false)
        setError(false)
      } catch (err) {
        setIsPending(true)
        setError({ err: "ha ocurrido un error" })
      }
    }
    getPage()




  }, [apiURL])

  const nextPage = () => {
    if ((+router.query.id + 1) >= 43) { } else {
      let regex = /(\d+)/g;
      setApiURL(data.next)
      router.push(`/page/${data.next.match(regex)}`)
    }
  }

  const prevPage = () => {
    if ((+router.query.id - 1) <= 0) { } else {
      let regex = /(\d+)/g;
      router.push(`/page/${data.prev.match(regex)}`)
      setApiURL(data.prev)
    }
  }

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
          <button onClick={prevPage}>Previus  {(+router.query.id - 1)}</button>
          <button onClick={nextPage} >Next {(+router.query.id + 1)}</button>
        </div>

      </Layout >
    )
  }

}
