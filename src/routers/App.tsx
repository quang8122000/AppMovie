import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import TrallerScreen from '../screens/Traller/TrallerSrceen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../configs/style';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryDark,
        labelStyle: {fontSize: wp('3'), fontWeight: 'bold'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require('../assets/images/home.png')}
                style={Styles.img}
              />
              <View style={focused ? Styles.active : undefined} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Traller"
        component={TrallerScreen}
        options={{
          tabBarLabel: 'Traller',
          tabBarIcon: ({focused}) => (
            <View style={Styles.view}>
              <Image
                source={require('../assets/images/clapperboard.png')}
                style={Styles.img}
              />
              <View style={focused ? Styles.active : undefined} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default App;

const Styles = StyleSheet.create({
  active: {
    width: wp('10'),
    height: 2,
    marginTop: wp('0.5'),
  },
  view: {
    alignItems: 'center',
  },
  img: {
    height: wp('6'),
    width: wp('6'),
  },
});
