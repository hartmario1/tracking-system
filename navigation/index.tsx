import { NavigationContainer } from "@react-navigation/native";
import { ColorSchemeName, Image, TouchableOpacity, View } from "react-native";
import LinkingConfiguration from './LinkingConfiguration';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList, RootTabScreenProps } from "../types";
import CreateTask from "../screens/CreateTask";
import NotFoundScreen from "../screens/NotFound";
import InternScreen from "../screens/Intern";
import LogIn from "../screens/LogIn";
import AdminScreen from "../screens/Admin";
import CreateUser from "../screens/CreateUser";
import SignUp from "../screens/SignUp";

import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
        component = {LogIn}
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
          }
        })} />
        <Stack.Screen 
        name = "SignUp" 
        component = {SignUp}
        options = {({ navigation }: RootTabScreenProps<'SignUp'>) => ({
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )
        })} />
      <Stack.Screen 
        name = "NotFound"
        component = {NotFoundScreen}
        options = {({ navigation }: RootTabScreenProps<'NotFound'>) => ({
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )
        })} />
        <Stack.Screen 
          name = "Intern"
          component={InternScreen}
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
            headerBackVisible: false
          })} />
        <Stack.Screen 
          name = "Admin"
          component={AdminScreen}
          options = {({ navigation }: RootTabScreenProps<'Admin'>) => ({
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
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
                <Entypo name="plus" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
      <Stack.Group screenOptions = {{ presentation: 'containedTransparentModal' }}>
        <Stack.Screen 
          name = "CreateTask"
          component = {CreateTask}
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
          <Stack.Screen 
          name = "CreateUser"
          component = {CreateUser}
          options = {({ navigation }: RootTabScreenProps<'CreateUser'>) => ({
            headerTitle: 'Create new user admin',
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
