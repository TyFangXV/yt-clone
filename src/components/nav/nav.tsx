import { Box, Input } from "@chakra-ui/react";
import React from "react";
import {ChevronLeftIcon} from '@chakra-ui/icons'
import Logo from "./logo"

const Nav = () => {
    return (
        <Box minWidth={"100vw"} backgroundColor="#4E3088" display="flex" justifyContent={"space-around"} minHeight="5vh">
         <Box display={"flex"}>
            <ChevronLeftIcon fontSize={"4xl"} cursor="pointer" />
            <Logo/>
         </Box>
         <Input type={"text"} marginTop="0.5vh" width={"15%"} size="sm" variant={"filled"} placeholder='Search' background={"#2A2164"} border="1px solid #040B25"/>
         
        </Box>
    )
}

export default Nav;