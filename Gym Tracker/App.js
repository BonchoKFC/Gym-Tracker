import React from 'react';
import { ExerciseProvider } from './ExerciseContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpreadsheetPage from './SpreadsheetPage';
import OneRepMaxPage from './OneRepMaxPage';
import WeightTrackingPage from './WeightTrackingPage'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ExerciseProvider>
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Spreadsheet" component={SpreadsheetPage} />
          <Tab.Screen name="1 Rep Max" component={OneRepMaxPage} />
          <Tab.Screen name="Weight Tracking" component={WeightTrackingPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </ExerciseProvider>
  );
};

export default App;
