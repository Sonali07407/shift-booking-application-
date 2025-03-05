import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ShiftProvider } from './src/context/ShiftContext';
import MyShifts from './src/screens/MyShifts';
import AvailableShifts from './src/screens/AvailableShifts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ShiftProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MyShifts">
          <Stack.Screen name="MyShifts" component={MyShifts} />
          <Stack.Screen name="AvailableShifts" component={AvailableShifts} />
        </Stack.Navigator>
      </NavigationContainer>
    </ShiftProvider>
  );
};

export default App;
