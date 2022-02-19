import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';

export interface queryProps {
  animeName: string;
}

interface StreamingLinkProps {
  name: string;
  link: string;
}

interface Episodes{
  mal_id: string;
  title: string;
  url: string;
  duration: number;
  aired : string;
  filler: boolean;
  recap: boolean;
  synopsis: string;
}

const Player: React.FC<queryProps> = (animeName) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchStatus, setSearchStatus] = useState<boolean>(true);
  const [links, setLink] = useState<StreamingLinkProps[]>();
  const [episodeData, setEpisodeData] = useState<string>();

  

  useEffect(() => {
    if (links === undefined) {
      (async () => {
        try {
          const res = await axios.get(
            `/api/link?mal_id=${animeName.animeName}`
          );

          if (res.status === 500) setSearchStatus(false);
          setLink(JSON.parse(JSON.stringify(res.data)));
          setSearchStatus(true);
          setLoading(false);
        } catch (error) {
          setSearchStatus(false);
          console.log(error);
        }
      })();
    }
  });

  //check if animeName is valid
  if (searchStatus === false) {
    return <Heading>No Content found</Heading>;
  }

    return (
      <Box>
        {loading ? (
          <Heading>Loading</Heading>
        ) : (
          <iframe
            style={{ minWidth: '50vw', minHeight: '55vh' }}
            src={links?.at(1)?.link}
            scrolling="no"
          ></iframe>
        )}
      </Box>
    );
};

export default Player;
