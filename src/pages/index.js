import Cards from '@/components/Cards'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Menu from '@/components/Menu'
import React from 'react'

const home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Main />
      <Cards />
      <Contact />
    </>
  )
}

export default home