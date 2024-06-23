import { StyleSheet, Text, View,Image } from 'react-native';
import {AntDesign} from "@expo/vector-icons";

function BusinessDetails({business}) {
  return (
    <View style={styles.container}>
       <Text style={styles.textstyle}>Name : {business.name}, (Rating : {business.rating}<AntDesign name="star" size={14} color="black"></AntDesign>
       , Review : {business.review_count})</Text>
        <Image source={{uri:business.image_url}} style={styles.Imgstyle}></Image>
    </View>
  );
}

export default BusinessDetails;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      margin:10
     // justifyContent: 'center',
    },
    Imgstyle:{
        height:150,
        width:200,
        borderRadius:5,
        marginBottom:5
    },
    textstyle:{
      fontSize:15,
      fontWeight:"bold"
    }
  });