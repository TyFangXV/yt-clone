import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { InputType } from 'zlib';
import Card from '../components/card/card';
import Nav from '../components/nav/nav';
import styles from '../styles/Home.module.css';
import {useRecoilState, useResetRecoilState } from 'recoil';
import { inputState } from '../state/input';
import { CurrentAnime, lastestAnime } from '../state/anime';
import { AnimeData, IAnime } from '../utils/interface';
import Axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';



const Home: NextPage = () => {
  const router = useRouter();
  const [lastestAnimeData, setLatestAnime] = useRecoilState<IAnime[]>(lastestAnime);

  const resetCurrentAnime = useResetRecoilState(CurrentAnime);


  useEffect(() => {
    //clear the current anime
    resetCurrentAnime();
    //check if lastestAnimeData is empty
    if(lastestAnimeData.length === 0){
    (async () => {
      try {
        const { data } = await Axios.get(
          `https://api.jikan.moe/v4/recommendations/anime`
        );

        //parse the data and put the nessesary data into the state
        const result = JSON.parse(JSON.stringify(data.data));
        const anime = result.map((anime: any) => {
          anime.entry.map((entry: any) => {
            const data: IAnime = {
              title: `${entry.title}`,
              image: entry.images.webp,
              content: `${anime.content}`,
              url: `${anime.url}`,
              mal_id: `${entry.mal_id}`,
            };
            
            setLatestAnime(prev => [...prev, data]);
            
          });
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }
  });
  return (
    <Box>
      <div className={styles.screen}>
        <Nav />
      </div>
      <Box
        paddingTop={'5vh'}
        paddingLeft="5vw"
        background="#191919"
        minWidth={'100vw'}
      >
        <Box
          display={'grid'}
          gridGap={'2vw'}
          gridTemplateColumns={'20vw 20vw 20vw 20vw'}
          background="#191919"
          overflowY="hidden"
        >
          {
           lastestAnimeData.length > 0 ?
                        lastestAnimeData.slice(0, 25).reverse().map((anime: IAnime, index) => {
                          return (
                            <Card
                              key={index}
                              title={anime.title}
                              image={anime.image}
                              mal_id={anime.mal_id}
                              router = {router}
                              url={anime.url}
                              content={anime.content}
                            />
                          );
                        })   
                        :
                        <Box>
                          <Heading color={"white"}>Loading...</Heading>
                        </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
