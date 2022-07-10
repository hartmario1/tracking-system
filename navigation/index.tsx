import { NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName, Image, TouchableOpacity, View } from "react-native";
import LinkingConfiguration from './LinkingConfiguration';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootTabScreenProps } from "../types";
import CreateTask from "../screens/CreateTask";
import NotFoundScreen from "../screens/NotFound";
import HomeScreen from "../screens/Home";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

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
            <View style={{ justifyContent:'center', paddingBottom: 5 }}>
              <Image 
              source={require('../assets/images/logo.png')} 
              style = {{ width: 222, height: 40 }} />
            </View>
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
            <View style={{ justifyContent:'center', paddingBottom: 5 }}>
              <Image 
              source={require('../assets/images/logo.png')} 
              style = {{ width: 250, height: 50 }} />
            </View>
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
          options = {({ navigation }: RootTabScreenProps<'CreateTask'>) => ({
            headerTitle: 'Create new entry',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleStyle: {
              color: '#000',
              fontFamily: 'poppins'
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Navigation
