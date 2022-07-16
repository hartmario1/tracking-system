import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useState } from "react";
import { RootTabScreenProps } from "../types";

const LogIn = ({ navigation }: RootTabScreenProps<'LogIn'>) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('')

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {{ marginHorizontal: 20, marginVertical: 20 }}>
        <View style = {{ paddingBottom: 100 }}>
          <Text style = {styles.logInText}>
            Hello.
          </Text>
          <Text style = {styles.logInText}>
            Welcome <Text style = {{ color: '#5371ff' }}>Back</Text>
          </Text>
        </View>
        <View style = {{ paddingBottom: 20 }}>
          <Text style = {{ letterSpacing: 1, fontWeight: 'bold', color: 'grey' }}>
            EMAIL
          </Text>
          <TextInput 
            style = {styles.input} 
            placeholder = "Enter your email"
            value = {email}
            onChangeText = {onChangeEmail} />
        </View>
        <View>
          <Text style = {{ letterSpacing: 1, fontWeight: 'bold', color: 'grey' }}>
            PASSWORD
          </Text>
          <TextInput
            style = {styles.input}
            placeholder = "Enter your password"
            value = {password}
            onChangeText = {onChangePassword}
            secureTextEntry
             />
        </View>

        <View style = {{ paddingTop: 285 }}>
          <TouchableOpacity
            style = {styles.loginButton}
            onPress = {() => {
                navigation.navigate('Home')
              }}>
              <SimpleLineIcons name="login" size={18} color="white" style = {{ paddingRight: 5 }} />
              <Text style = {styles.loginButtonText}>
                Log in
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logInText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 8,
    padding: 10,
  },
  loginButton: {
    justifyContent: 'center',
    backgroundColor: "#5371ff",
    padding: 12,
    borderRadius: 50,
    flexDirection: 'row',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
})

export default LogIn;
