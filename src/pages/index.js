import Cards from '@/components/Cards'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Menu from '@/components/Menu'
import Mobile from '@/components/Mobile'
import React from 'react'

const home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Main />
      <Cards />
    </>
  )
}

export default home