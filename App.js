import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catagory from './Catagory';
import SignUp from './SignUp';
import LogIn from './LogIn';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import Ap from './Ap';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Catagory' component={Catagory} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='AdminDashboard' component={AdminDashboard} />
        <Stack.Screen name='UserDashboard' component={UserDashboard} />
        <Stack.Screen name='APiData' component={Ap} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

