import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { InputType } from 'zlib';
import Card from '../components/card/card';
import Nav from '../components/nav/nav';
import styles from '../styles/Home.module.css';
import recoil, { RecoilState, useRecoilState } from 'recoil';
import { inputState } from '../state/input';
import { lastestAnime } from '../state/anime';
import { IAnime } from '../components/types/interface';
import Axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';

const axios = Axios.defaults;

const Home: NextPage = () => {
  const inputRef = React.createRef<InputType>();
  const [input, setInput] = recoil.useRecoilState(inputState);
  const [lastestAnimeData, setLatestAnime] =
    useRecoilState<IAnime[]>(lastestAnime);

  useEffect(() => {
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
              mal_id: `${anime.mal_id}`,
            };
            
            setLatestAnime(prev => [...prev, data]);
          });
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
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
