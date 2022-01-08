import React, { useState, useEffect } from 'react'
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import { useRouter } from "next/router";


export default function characters() {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/characters') {
      console.log("Es igual")
      router.push(`/characters/${Math.floor(Math.random() * 826)}`)
    }
  }, [])

  return (
    <Layout>
      <Spinner />
    </Layout>
  )
}
