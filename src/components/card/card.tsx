/* eslint-disable @next/next/no-img-element */
import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { AnimeData, IAnime } from '../../utils/interface';

const Card: React.FC<IAnime> = ({ title, image, mal_id, router }) => {
  return (
    <Box
    onClick={() => router.push(`/anime/${mal_id}`)}
      backgroundColor={'#2A2164'}
      display="flex"
      cursor={"pointer"}
      justifyContent={'space-between'}
      borderRadius="5px"
      title='Click to see more'
      flexDirection="column"
      maxW={'300px'}
      maxH={"450px"}
    >
      <Image
        src={image.large_image_url}
        alt={title}
        objectFit="contain"
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
