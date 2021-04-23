import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/Details/DetailsScreen';
import ListAllTraller from '../screens/Details/modules/listAllTraller';
import Loading from '../screens/Loading/LoandingScreen';
import {createService} from '../configs/api';
import App from '../routers/App';
import {connect} from 'react-redux';
import {systemAction} from '../redux/systems/action';

const Task = createStackNavigator();

const Index = (props: any) => {
  React.useEffect(() => {
    createService();
  }, []);
  console.log('props', props);
  return (
    <NavigationContainer>
      <Task.Navigator>
        {props.loading ? (
          <Task.Screen
            name={'Loading'}
            component={Loading}
            options={{headerShown: false}}
          />
        ) : (
          <>
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
            <Task.Screen
              name={'ListAllTraller'}
              component={ListAllTraller}
              options={{headerShown: false}}
            />
          </>
        )}
      </Task.Navigator>
    </NavigationContainer>
  );
};
const mapStateFromProps = (state: any) => {
  return {
    loading: state.system.loading,
  };
};
export default connect(mapStateFromProps, systemAction)(Index);
