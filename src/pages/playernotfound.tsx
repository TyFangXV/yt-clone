import { Box, Heading, Image, Text} from '@chakra-ui/react';
import { NextPage } from 'next'
import Link from 'next/link'
import Nav from '../components/nav/nav';
import gif from '../images/404.gif'

const PlayerNotFound:NextPage = () => {
  return (
      <div>
          <Box width={"100vw"} height={"5vh"} background={"#4E3088"}/>
          <Box
            display={"flex"}
            justifyContent={"center"}
            background="#191919"
            flexDirection="column"    
            alignItems={"center"}
            height={'100vh'}
          >
              <Image src={gif.src} alt='not found'/>
              <Heading color={"white"} >
                  <Link href={"/"}>Anime not found</Link>
              </Heading>
               <Text color={"white"} textDecor="underline">
                    <Link href={"/"}>Go back to the homepage-&gt;</Link>
               </Text>
          </Box>
      </div>
  )
}


export default PlayerNotFound;