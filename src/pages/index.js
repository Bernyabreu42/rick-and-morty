import Layout from "../components/Layout";
import React, { useContext } from 'react';
import ContextValue from '../context/GlobalContext';
import { useRouter } from 'next/router'
import Card from "../components/Card";

export default function Home() {

  const router = useRouter()

  return (

    <ContextValue.Provider value={{ nombre: "Berny" }}>
      < Layout >

        <section className="ListCards">
          <Card />
        </section>

      </Layout>
    </ContextValue.Provider>

  )
}
