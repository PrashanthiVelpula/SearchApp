import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function SearchComponent(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textstyle}
      placeholder='Search'
      value={props.userInput}
      onChangeText={ (updatedInput)=>props.onInputChange(updatedInput) }
    //   onEndEditing={()=>props.onSubmit()}
    />
    <TouchableOpacity onPress={ ()=>props.onSubmit()} style={{marginLeft:"auto"}}>
      <FontAwesome name="search" size={24} color="black"/></TouchableOpacity>
      </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    backgroundColor: '#fff',
    borderColor:'gray',
    borderWidth:2,
    padding:10,
    borderRadius:10,
   // marginTop:100
   
  },
  textstyle : {
    width:200,
    // borderColor:'red',
    // borderWidth:2
  }
});

export default SearchComponent;