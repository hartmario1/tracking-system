import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { awaitRehydrate, persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect, useState } from 'react';


const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [hydratated, setHydratated] = useState<boolean>();

  useEffect(() => {
    awaitRehydrate().then(setHydratated)
  }, []);
  
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store = {store}>
        <PersistGate persistor={persistor} loading={hydratated}>
          <RootSiblingParent> {hydratated &&
            (<SafeAreaProvider>
              <Navigation colorScheme = {colorScheme} />
              <StatusBar />
            </SafeAreaProvider> )}
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
