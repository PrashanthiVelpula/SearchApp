import { StyleSheet, Text, View} from 'react-native';
import {useEffect} from "react";

import BusinessDetails from '../Components/BusinessDetails';
import yelpApi from '../API/yelpApi';
import { useState } from 'react';

function ShowRestaurantInfo(props) {
    const business_id=props.route.params.id;
    const [businessdata,setbusinessdata]=useState(null);

    const getBusinessData = async(business_id)=>{
        const response = await yelpApi.get(`/${business_id}`);
        console.log(response.data);
        setbusinessdata(response.data);
    }

    useEffect(
        ()=>{
          getBusinessData(business_id)
        },
        []
      );

     return  businessdata === null ? null :

  <View>
 <Text>Restaurant details : </Text>
<Text>{businessdata.name}</Text>
 <Text>{businessdata.phone}</Text>
 <Text>{businessdata.price}</Text>
 <Text>{businessdata.transactions}</Text>
 <Text>{businessdata.address1}</Text>
  </View>
    
}

const styles = StyleSheet.create({
  container: {
    
   
  },
});

export default ShowRestaurantInfo;