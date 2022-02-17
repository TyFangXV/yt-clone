import { NextPage } from "next";
import React, { useEffect } from "react";


const Search:NextPage = () => {
    useEffect(() => {
        //get the query from the url
        const query = window.location.search.split("=")[1];
        //get the anime data from the api
        (async()=>{
            
        })

    })
    return (
        <div>
            Search
        </div>
    )
}

export default Search;