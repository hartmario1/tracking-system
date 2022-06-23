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
    <Stack.Navigator>
      <Stack.Screen 
        name = "Root" 
        component = {HomeScreen}
        options = {() => ({
          headerTitle: () => (
            <Image 
            source={require('../assets/images/logo.png')} 
            style = {{ width: 250, height: 50 }} />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
          },
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
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
          }
        })} />
      <Stack.Group screenOptions = {{ presentation: 'containedTransparentModal' }}>
        <Stack.Screen 
          name = "CreateTask"
          component={CreateTask}
          options = {() => ({
            headerTitle: 'Create new entry',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#000'
            }
          })} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Navigation
