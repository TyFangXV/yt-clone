/* eslint-disable @next/next/no-img-element */
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { IAnime } from '../types/interface';

const Card: React.FC<IAnime> = ({ title, image }) => {
  return (
    <Box
      backgroundColor={'#2A2164'}
      display="flex"
      cursor={"pointer"}
      justifyContent={'space-between'}
      borderRadius="5px"
      title='Click to see more'
      flexDirection="column"
      maxW={'250px'}
      maxHeight={'450px'}
    >
      <Image
        src={image.large_image_url}
        alt={title}
        objectFit="contain"
        maxW={'250px'}
        maxH={'400px'}
      />
      <Box backgroundColor={'#4E3088'}>
        <Heading
          as="h1"
          size="sm"
          fontWeight="normal"
          textAlign={"center"}
          color={'black'}
          minHeight="5vh"
        >
          {
            //if the title is too long, it will be cut off and add ...
            title.length > 65 ? title.substring(0, 65) + '...' : title
          }
        </Heading>
      </Box>
    </Box>
  );
};

export default Card;
