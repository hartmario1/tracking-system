import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <QueryClientProvider client = {queryClient}>
        <Provider store = {store}>
          <SafeAreaProvider>
            <Navigation colorScheme = {colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
      </QueryClientProvider>
    );
  }
}

export default App;
