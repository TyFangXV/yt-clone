import {
  Box,
  Tag,
  Image,
  Heading,
  Divider,
  Flex,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { CurrentAnime } from '../state/anime';
import { useRecoilValue } from 'recoil';
import { AnimeData } from '../utils/interface';

const AnimeHeader: React.FC = () => {
  const data = useRecoilValue<AnimeData | null>(CurrentAnime);
  return (
    <Box
      marginTop={'2vh'}
      display={'flex'}
      justifyContent="space-around"
      backgroundColor={'#4E3088'}
      minW="100vw"
    >
      <Box>
        <div>
          <Box
            display="flex"
            justifyContent={'space-between'}
            position="absolute"
            marginTop="10px"
            marginLeft="1px"
          >
            <Box id="AnimeType">
              <Tag color="white" backgroundColor={'#2A2164'}>
                {data?.type}
              </Tag>
            </Box>
            <Box id="AnimeEpisodeCount">
              <Tag color="white" backgroundColor={'#2A2164'}>
                {data?.episodes}EP
              </Tag>
            </Box>
          </Box>
        </div>
        <Image
          src={data?.images.jpg.large_image_url}
          maxW="50vw"
          maxH="50vh"
          minW="15vw"
          minH="25vh"
          alt={data?.title}
          margin="1vh 0 1vh 0"
        />
      </Box>
      <Box
        maxW={'60vw'}
        display="flex"
        flexDirection={'column'}
        justifyContent="space-between"
      >
        <Heading as="h1" size="xl" color={'black'} fontWeight="medium">
          {data?.title}
          <Tag marginTop={'15px'} marginLeft="5px">
            Status: {data?.status}
          </Tag>
        </Heading>
        <Divider />
        <p>{data?.synopsis}</p>
        <Divider />
        <Flex>
          <Heading as="h2" size="md" color={'black'} fontWeight="medium">
            Genre :{' '}
          </Heading>
          <Box>
            {data?.genres.map((genre: any, index: number) => {
              return (
                <Tag
                  key={index}
                  color="white"
                  margin="0 5px 0 0"
                  backgroundColor={'#2A2164'}
                >
                  {genre.name}
                </Tag>
              );
            })}
          </Box>
        </Flex>
        <Divider />
        <Flex>
          <Button
            marginRight={'10px'}
            backgroundColor="#040B25"
            color={'white'}
          >
            <a href={data?.url}>MAL Page</a>
          </Button>
          <Button
            marginRight={'10px'}
            backgroundColor="#040B25"
            color={'white'}
          >
            <a href={`https://gogoanime.fi/${data?.title.replaceAll(" ", "-").toLocaleLowerCase()}-episode-1`}>Start EP1</a>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AnimeHeader;
