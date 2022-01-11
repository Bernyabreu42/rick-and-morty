import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Residents() {

  const [data, setData] = useState([])

  const router = useRouter()
  const url = `https://rickandmortyapi.com/api/location/${router.query.id}`;

  useEffect(() => {
    if (router.query.id !== undefined) {

      const getResidents = async () => {
        let res = await fetch(url);
        if (!(res.ok)) {
          throw ({
            error: !res.statusText ? "Ha ocurrido un error" : res.statusText,
            status: res.status,
          })
        }


        let response = await res.json();
        const { residents } = response;
        residents.map(async (el) => {
          let res = await fetch(el);
          if (!(res.ok)) {
            throw ({
              error: !res.statusText ? "Ha ocurrido un error" : res.statusText,
              status: res.status,
            })
          }
          let response = await res.json();
          setData(data.push(response))
        })
      }
      getResidents();
    }
  }, [url])




  return (
    <Layout >
      Esto esta imposible
      {
        console.log(data)
      }
    </Layout>
  )
}
