/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import {useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Nav from '../../components/nav/nav';
import { AnimeData } from '../../utils/interface';
import Head from 'next/head';
import axios from 'axios';
import List from '../../components/card/list';
import AnimeHeader from '../../components/anime-header';
import { CurrentAnime } from '../../state/anime';
import { type } from 'os';



const AnimePage: NextPage<AnimeData> = () => {
  const router = useRouter();
  const { mal_id } = router.query;
  const [animeData, setAnimeData] = useRecoilState<AnimeData | null>(CurrentAnime);
  const [loading, setLoading] = useState<boolean>(false);

  
  
  useEffect(() => {
    if(!router.isReady) return;
    if(animeData === null) {
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
    }
  },[router.isReady]);

  return (
    <div>
      {
        loading || animeData === null ? (
          <Center>
            <Heading>Loading...</Heading>
          </Center>
        ) : (
          <Box backgroundColor={'#191919'}>
          <Head>
              <title>{animeData?.title}</title>
          </Head>
        <Nav />
        <Center>
          <AnimeHeader/>
        </Center>
        <Divider />
         <Box marginTop={"10vh"}>
           <Center>
             <Flex flexDirection={"column"}>
                <Heading color={'whiteAlpha.700'}>Episodes</Heading>
              <Divider minW={"50vw"}/>
              <Center>
                <List amount={animeData?.episodes} title={animeData.title} mal_id={animeData?.mal_id}  type={animeData?.type}/>                  
              </Center>
              
             </Flex>    
            </Center>       
         </Box>
    
      </Box>
      )
      }   
    </div>
  );
};

export default AnimePage;
