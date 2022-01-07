import Layout from "../components/Layout";
import React, { useContext } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()


  return (

    < Layout >
      <section className="ListCards">
        texto mientas
      </section>
    </Layout>

  )
}
