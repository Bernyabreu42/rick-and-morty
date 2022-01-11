import Layout from "../components/Layout";
import React from 'react';
import { useRouter } from 'next/router'
import Header from "../components/Header";


export default function Home() {
  const router = useRouter()


  return (
    < Layout >
      <Header />
    </Layout>
  )
}
