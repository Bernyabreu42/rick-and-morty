import React, { useState, useEffect } from 'react'
import Layout from "../components/Layout";
import GetLocations from "../services/GetLocations";
import Spinner from '../components/Spinner';
import CardLocations from '../components/CardLocations';

export default function Locations() {

  const [data, setData] = useState(null)

  useEffect(() => {
    GetLocations().then(res => {
      const { info, results, nextPage } = res;
      setData(results)
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
        <div className='ListCards'>
          {
            data.map((el) => {
              return (
                <CardLocations key={el} props={el} />
              )
            })
          }
        </div>

      </Layout>
    )
  }

}
