import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Tag,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import axios from 'axios';
import { atom, useRecoilState } from 'recoil';
import Nav from '../../components/nav/nav';
import { AnimeData } from '../../components/utils/interface';
import Head from 'next/head';

const AnimeDataAtom = atom<AnimeData | null>({
  key: 'animeData',
  default: null,
});

const AnimePage: NextPage<AnimeData> = () => {
  const router = useRouter();
  const { mal_id } = router.query;
  const [animData, setAnimeData] = useRecoilState<AnimeData | null>(
    AnimeDataAtom
  );

  useEffect(() => {
    (async () => {
      try {
        const { data }: any = await axios.get(
          `https://api.jikan.moe/v4/anime/${mal_id?.toString()}`
        );

        //parse
        const result: AnimeData = JSON.parse(JSON.stringify(data.data));

        const filteredData: AnimeData = {
          title: result.title,
          images: result.images,
          synopsis: result.synopsis,
          episodes: result.episodes,
          score: result.score,
          type: result.type,
          status: result.status,
          aired: result.aired,
          genres: result.genres,
          members: result.members,
          producers: result.producers,
          studios: result.studios,
          url: result.url,
          mal_id: result.mal_id,
          trailer: result.trailer,
          rank: result.rank,
          popularity: result.popularity,
          favorites: result.favorites,
          title_english: result.title_english,
          title_japanese: result.title_japanese,
          source: result.source,
          airing: result.airing,
          duration: result.duration,
          rating: result.rating,
          scored_by: result.scored_by,
          background: result.background,
          season: result.season,
          year: result.year,
          broadcast: result.broadcast,
          licensors: result.licensors,
        };

        setAnimeData(filteredData);
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return (
    <Box backgroundColor={'#191919'}>
        <Head>
            <title>{animData?.title}</title>
        </Head>
      <Nav />
      <Center>
        <Box
          marginTop={'2vh'}
          display={'flex'}
          justifyContent="space-around"
          backgroundColor={'#4E3088'}
          minW="100vw"
        >
          <Box>
            <Box
              display="flex"
              position={'absolute'}
              justifyContent={'space-between'}
              marginTop="10px"
              marginLeft="1px"
            >
              <Box id='AnimeType' display={"inline-flex"}>
                <Tag color="white" backgroundColor={'#2A2164'}>
                  {animData?.type}
                </Tag>
              </Box>
              <Box id='AnimeEpisodeCount' display={"inline-flex"}>
                <Tag color="white" right={'5px'} backgroundColor={'#2A2164'}>
                  {animData?.episodes}EP
                </Tag>
              </Box>
            </Box>

            <Image
              src={animData?.images.jpg.large_image_url}
              maxW="50vw"
              maxH="50vh"
              alt={animData?.title}
              margin="1vh 0 1vh 0"
            />
          </Box>
          <Box maxW={'60vw'}>
            <Heading as="h1" size="xl" color={'black'} fontWeight="medium">
              {animData?.title}
            </Heading>
            <Divider />
            <p>{animData?.synopsis}</p>
            <Divider />
            <Heading as="h2" size="md" color={'black'} fontWeight="medium">Genre</Heading> 
            <Box>
              {
                  animData?.genres.map((genre: any, index: number) => {
                    return (
                      <Tag key={index} color="white" margin="0 5px 0 0" backgroundColor={'#2A2164'}>{genre.name}</Tag>
                    )
                  })
              }
            </Box>     
            <Flex flexDirection={'column'}>
              <Box>
                <Tag>Status: {animData?.status}</Tag>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default AnimePage;
