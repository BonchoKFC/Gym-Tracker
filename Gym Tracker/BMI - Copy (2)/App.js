import React from 'react';
import { ExerciseProvider } from './ExerciseContext';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SpreadsheetPage from './SpreadsheetPage';

const TabNavigator = createBottomTabNavigator({
  Spreadsheet: SpreadsheetPage,
  Video: VideoTab,
});

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <ExerciseProvider>
      <AppContainer />
    </ExerciseProvider>
  );
};

export default App;
