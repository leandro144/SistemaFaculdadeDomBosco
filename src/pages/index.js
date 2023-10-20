import Cards from '@/components/Cards'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
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
      <Footer />
    </>
  )
}

export default home