import { Image, Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import VLibras from '@djpfs/react-vlibras'
import React from 'react'
import { useRef } from 'react';

const Main = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box 
          w='100%'
          h={{base: "60vh", sm: "80vh"}}
          bgImage="url('./assets/main.jpg')"
          bgSize="cover"
          >
            <Flex w='100%' h='100%' alignItems='center' textAlign={'left'}>
              <Flex w='100%' maxW='1200px' margin='0 auto' color='#fff' flexDir='column' gap={{base: '1.5rem', sm: '3rem'}}>
                <Heading fontSize={{base: '2.5rem', md: '3.5rem'}}>Graduação é na <Text as={'span'} color={'#00566a'}>DOM</Text><Text as={'span'} color='#00b2a6'>BOSCO</Text></Heading> 
                <Heading fontSize={{base: '1.5rem', md: '2.5rem'}} fontWeight={'regular'}>1° Semestre de <Text as={'span'} fontWeight={'bold'}>2024</Text></Heading>
                <Heading fontSize={{base: '1.5rem', md: '2.5rem'}}>Inscrições até 06/12</Heading>
                <Box border={'1px solid #fff'} p={4} maxW={{base: '350px', sm: '400px'}}>
                  <Text fontSize='1.3rem' textAlign='justify'>Descontos especias, de até 50%<br></br> nas mensalidades,<br></br> nos cursos de graduação DOMBOSCO</Text>
                </Box>
                
              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box 
          w='100%'
          h={{base: "60vh", sm: "80vh"}}
          bgImage="url('./assets/main3.jpg')"
          bgSize="cover"
          bgPosition='center'
          >
            <Flex w={'100%'} h={'85vh'} alignItems={'center'}>
              <Flex w={'100%'} maxW={'1200px'} margin={'0 auto'} justifyContent={'center'} >

              </Flex>
            </Flex>
          </Box>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <VLibras forceOnload={true} />
    </>
  )
}

export default Main