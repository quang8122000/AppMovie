import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/Details/DetailsScreen';
import App from '../routers/App';

const Task = createStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Task.Navigator>
        <Task.Screen
          name={'App'}
          component={App}
          options={{headerShown: false}}
        />
        <Task.Screen
          name={'Details'}
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Task.Navigator>
    </NavigationContainer>
  );
}
export default Home;
