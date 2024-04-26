import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native'; 
import Home from './Home';
import Signup from './Signup';
import Gallery from './Gallery';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: null,
          headerLeft: () => (
            <Image
              source={require('./logo.png')}
              style={{ width: 40, height: 40, marginLeft: 10 }} 
            />
          ),
        }}
      >
        <Stack.Screen name="TASK International College" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}