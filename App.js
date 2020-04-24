import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux'
import './src/config/ReactotronConfig';
import store from './src/store';
import Route from "./src/routes";

export default function App() {
  return (
      <ReduxProvider store={store}>
          <PaperProvider>
              <StatusBar backgroundColor="transparent" translucent/>
              <Route/>
          </PaperProvider>
      </ReduxProvider>
  );
}
