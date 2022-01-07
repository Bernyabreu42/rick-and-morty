import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Layout from "../components/Layout";
import GetCharacters from "../services/GetCharacters";

export default function characters() {

  const [data, setData] = useState(null)

  useEffect(() => {
    GetCharacters().then(res => {
      setData(res)
    })
  }, [])


  if (data === null) {
    return (
      <Layout>
        Loading...
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

      </Layout>
    )
  }





}
