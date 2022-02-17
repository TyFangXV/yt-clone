import { Box, HStack, Tag } from "@chakra-ui/react";
import React from "react";

interface dataProps {
    amount : number | undefined
}

const List: React.FC<dataProps> = ({amount}) => {
    return (
        <HStack>
            {
                [...Array(amount)].map((_, index) => (
                    <Box key={index} cursor="pointer" title={`Click to watch EP${index}`}>
                        <Tag padding={"15px"}_hover={{backgroundColor : "#2A2164", color:"white"}} backgroundColor="#7741BD">{index}</Tag>
                    </Box>
                ))
            }
        </HStack>
    )
}

export default List;
