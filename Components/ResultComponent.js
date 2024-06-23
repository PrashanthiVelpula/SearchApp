import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import BusinessDetails from './BusinessDetails';
import ShowRestaurantInfo from '../Screens/ShowRestaurantInfo';

function ResultComponent(props) {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>ResultComponent {props.resultArray.length}</Text> */}
      <FlatList
      data={props.resultArray}
      keyExtractor={(business)=>business.id}
      renderItem={
        (element)=>{
            const business=element.item;
            return(
                <View>
                  <TouchableOpacity
                  onPress={ ()=> navigation.navigate('Restaurant Info',{id:business.id})}>
                    <BusinessDetails business={business}/>
                    </TouchableOpacity>
                    </View>
            );
        }
      }

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginLeft:10
  },
});

export default ResultComponent;