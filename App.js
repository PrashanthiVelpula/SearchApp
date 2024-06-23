import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen';
import ShowRestaurantInfo from './Screens/ShowRestaurantInfo';

export default function App() {
  const Stack= createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search Food and Restaurants" component= {HomeScreen}/>
        <Stack.Screen name="Restaurant Info" component= {ShowRestaurantInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
