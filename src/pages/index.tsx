import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { InputType } from 'zlib';
import Card from '../components/card/card';
import Nav from '../components/nav/nav';
import styles from '../styles/Home.module.css';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { inputState } from '../state/input';
import { CurrentAnime, lastestAnime } from '../state/anime';
import { AnimeData, IAnime } from '../utils/interface';
import Axios from 'axios';
import { Box, Center, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const [lastestAnimeData, setLatestAnime] =
    useRecoilState<AnimeData[]>(lastestAnime);

  const resetCurrentAnime = useResetRecoilState(CurrentAnime);

  useEffect(() => {
    //clear the current anime
    resetCurrentAnime();
    //check if lastestAnimeData is empty
    if (lastestAnimeData.length === 0) {
      (async () => {
        try {
          const { data } = await Axios.get(
            `https://api.jikan.moe/v4/top/anime`
          );

          //parse the data and put the nessesary data into the state
          const result: AnimeData[] = JSON.parse(JSON.stringify(data.data));
          //sort the array by the type
          result.sort((a, b) => {
            if (a.type === 'TV') return 1;
            if (b.type === 'Movie') return -1;
            return 0;
          });
          setLatestAnime(result);
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
      <Center>
      <Box
        paddingLeft={'25px'}
        paddingTop={'5vh'}
        background="#191919"
        minWidth={'100vw'}
      >
          <Box
          textAlign={"center"}
            display={'grid'}
            gridGap={'2vw'}
            gridTemplateColumns={'repeat(auto-fit, minmax(300px, 1fr))'}
            background="#191919"
            overflowY="hidden"
          >
            
            {lastestAnimeData.length > 0 ? (
              lastestAnimeData
                .map((anime: AnimeData, index) => {
                  return (
                    <Card
                      key={index}
                      title={anime.title}
                      image={anime.images.webp}
                      mal_id={anime.mal_id.toString()}
                      router={router}
                      url={anime.url}
                      content={anime.synopsis}
                    />
                  );
                })
            ) : (
              <Box>
                <Heading color={'white'}>Loading...</Heading>
              </Box>
            )}
          </Box>          

      </Box>
        </Center>
    </Box>
  );
};

export default Home;
