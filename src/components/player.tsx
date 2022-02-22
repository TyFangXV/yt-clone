import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';

export interface IqueryProps {
  animeName: string;
}

interface IStreamingLinkProps {
  name: string;
  link: string;
}


const Player: React.FC<IqueryProps> = (animeName) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchStatus, setSearchStatus] = useState<boolean>(true);
  const [links, setLink] = useState<IStreamingLinkProps[]>();

  

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
          console.log(links);
          
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
            src={links?.toString() as string}
            allowFullScreen
            scrolling="no"
          ></iframe>
        )}
      </Box>
    );
};

export default Player;
