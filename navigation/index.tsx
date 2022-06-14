import { NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName, Image } from "react-native";
import LinkingConfiguration from './LinkingConfiguration';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import CreateTask from "../screens/CreateTask";
import NotFoundScreen from "../screens/NotFound";
import HomeScreen from "../screens/Home";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking = {LinkingConfiguration}
      theme = {colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      
    }}>
      <Stack.Screen 
        name = "Root" 
        component = {HomeScreen}
        options = {() => ({
          headerTitle: () => (
            <Image 
            source={require('../assets/images/logo.png')} 
            style = {{ width: 250, height: 50 }} />
          ),
          headerTitleAlign: 'center'
        })} />
      <Stack.Screen 
        name = "NotFound"
        component = {NotFoundScreen}
        options = {() => ({
          headerTitle: () => (
            <Image 
            source={require('../assets/images/logo.png')} 
            style = {{ width: 250, height: 50 }} />
          ),
          headerTitleAlign: 'center'
        })} />
      <Stack.Group screenOptions = {{ presentation: 'containedTransparentModal' }}>
        <Stack.Screen 
          name = "CreateTask"
          component={CreateTask}
          options = {() => ({
            headerTitle: () => (
              <Image 
              source={require('../assets/images/logo.png')} 
              style = {{ width: 250, height: 50 }} />
            ),
            headerTitleAlign: 'center'
          })} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


export default Navigation
