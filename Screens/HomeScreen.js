import { StyleSheet, Text, View } from 'react-native';
import SearchComponent from '../Components/SearchComponent';
import ResultComponent from '../Components/ResultComponent';
import { useEffect, useState } from 'react';
import useAPIResults from '../CustomHook/UseAPIResults';
import yelpApi from '../API/yelpApi';

function HomeScreen() {

    const [SearchTerm,setSearchTerm]=useState("");
    const [searchAPI,SearchResult,errmessage]=useAPIResults();


  return (
    <View style={styles.container}>
      <SearchComponent
      userInput={SearchTerm}
      onInputChange={ (updatedValue)=>setSearchTerm(updatedValue) } 
      onSubmit={ ()=> {console.log(SearchTerm);
                        searchAPI(SearchTerm)}
            } />
      {/* {return (setSearchTerm(updatedValue));} } */}

      {/* <Text>{SearchTerm}</Text> */}

      {errmessage !==''
      ?<Text>{errmessage}</Text>: 
      <ResultComponent resultArray={SearchResult}/>
          }
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column'
     
    },
  });