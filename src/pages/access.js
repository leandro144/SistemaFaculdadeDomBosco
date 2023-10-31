import DownloadForm from '@/components/DownloadForm'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import { Box , Heading, Image} from '@chakra-ui/react'
import React from 'react'



const access = () => {


  return (
    <>
        <Header />
        <Menu />
        <DownloadForm />
    </>
  )
}

export default access;