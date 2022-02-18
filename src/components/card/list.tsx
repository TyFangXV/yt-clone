import { Box, Grid, Tag } from "@chakra-ui/react";
import React from "react";

interface dataProps {
    amount : number | undefined
}

const List: React.FC<dataProps> = ({amount}) => {
    if(amount === null) return <Tag padding={"15px"}_hover={{backgroundColor : "#2A2164", color:"white"}} backgroundColor="#7741BD">N/A</Tag>
    return (
        <Grid templateColumns="repeat(15, 15fr)" gap={6}>
            {
                [...Array(amount)].map((_, index) => (
                    <Box key={index} cursor="pointer" title={`Click to watch EP${index}`}>
                        <Tag padding={"15px"}_hover={{backgroundColor : "#2A2164", color:"white"}} backgroundColor="#7741BD">{index + 1}</Tag>
                    </Box>
                ))
            }
        </Grid>
    )
}

export default List;
