import yelpApi from '../API/yelpApi';

import { useEffect, useState } from 'react';

function UseAPIResults(){
    const [SearchResult,setSearchResult]=useState([]);
    const [errmessage,seterrmessage]=useState('')
    const searchAPI = async(userQuery)=>{
    try{
    const response= await yelpApi.get('/search',
    {
        params: {
            term : userQuery,
            limit:50,
            location:'grand rapids'

        }
    });
     //console.log(response.data.businesses);
    setSearchResult(response.data.businesses);

    }
    catch(err){
    console.log(err);
    console.log(err.response.data);
    seterrmessage("Something went wrong");
    }
    };

    useEffect(
    ()=>{
    console.log("initial search");
    searchAPI('pizza');
    },
    []
    );

 return [searchAPI,SearchResult,errmessage]
}
export default UseAPIResults;