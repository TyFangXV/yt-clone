import { Box, Input } from '@chakra-ui/react';
import React, { KeyboardEvent } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Logo from './logo';
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { inputState } from '../../state/input';
import { searchAnime } from '../../state/anime';
import { searchPageLoadingStatus } from '../../state/loading';


//check if the input is empty
const isEmpty = (input: string) => {
    return input.trim() === '';
};


const Nav = () => {
  const router = useRouter();
  const inputRef = React.createRef<HTMLInputElement>();
  const [input, setInput] = useRecoilState<string>(inputState);
  const [loading, setLoading] = useRecoilState<boolean>(searchPageLoadingStatus);

  const resetSearchAnime = useResetRecoilState(searchAnime);

  const handleKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter')
    {
      if(isEmpty(input)) alert('Please enter a valid input');
      //reset the search anime state
      resetSearchAnime();
      //set the loading state
      setLoading(true);
      
      if(!isEmpty(input)) router.push(`/search?q=${input}`);

    }
  }

  return (
    <Box
      minWidth={'100vw'}
      backgroundColor="#4E3088"
      display="flex"
      justifyContent={'space-around'}
      minHeight="5vh"
    >
      <Box display={'flex'}>
        <ChevronLeftIcon
          fontSize={'4xl'}
          cursor="pointer"
          onClick={() => router.back()}
        />
        <Logo />
      </Box>
      <Input
        ref={inputRef}
        type={'text'}
        marginTop="0.5vh"
        onKeyPress={handleKeyPress}
        width={'15%'}
        size="sm"
        onChange={(e) => setInput(e.target.value)}
        variant={'filled'}
        placeholder="Search"
        background={'#2A2164'}
        border="1px solid #040B25"
      />
    </Box>
  );
}
export default Nav;
