import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { RootTabScreenProps } from "../types";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Buffer } from 'buffer';
import Toast from "react-native-root-toast";

const LogIn = ({ navigation }: RootTabScreenProps<'LogIn'>) => (
  <Formik initialValues={{ username: '', password: '' }}
      onSubmit = {async values => {
        try {
          const encode = (str: string):string => new Buffer(str, 'binary').toString('base64');
          const auth = encode(`${values.username.toLowerCase()}:${values.password}`);
          const stream = await fetch('https://tracksystem.herokuapp.com/auth', {
            method: 'post',
            headers: new Headers({
              'Content-Type': 'application/json', 
              authorization: `basic ${auth}` 
            })
          });

          const response = await stream.json();
          if (stream.status === 200) {
            Toast.show('Logged in successfully', {
              duration: Toast.durations.LONG,
              position: -100,
              shadow: true,
              animation: true,
              delay: 0,
            });

            const isAdmin = response.user.role === "admin"
            if (isAdmin) navigation.navigate('Admin')
            else navigation.navigate('Intern');

          } else {
            Toast.show('Something went wrong, try again!', {
              duration: Toast.durations.LONG,
              position: -100,
              shadow: true,
              animation: true,
              delay: 0,
            });
          }
          
          return Promise.resolve(response);
        } catch (error) {
          return Promise.reject(error)
        }
      }}
      validationSchema = {Yup.object().shape({
        username: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!')
      })}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
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
                USERNAME
              </Text>
              <TextInput 
                style = {styles.input} 
                blurOnSubmit
                placeholder = "Enter your username"
                value = {values.username}
                onChangeText = {handleChange('username')}
                onBlur = {handleBlur('username')} />
                {errors.username && touched.username
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.username}
                    </Text>
                  )
                  : null}
            </View>
            <View>
              <Text style = {{ letterSpacing: 1, fontWeight: 'bold', color: 'grey' }}>
                PASSWORD
              </Text>
              <TextInput
                style = {styles.input}
                blurOnSubmit
                placeholder = "Enter your password"
                value = {values.password}
                onChangeText = {handleChange('password')}
                onBlur = {handleBlur('password')}
                secureTextEntry />
                {errors.password && touched.password
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.password}
                    </Text>
                  )
                  : null}
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}>
                <Text style = {{ color: '#5371ff', alignSelf: 'center', paddingTop: 10 }}>
                  Don't have an account? Sign up!
                </Text>
              </TouchableOpacity>
            </View>

            <View style = {{ paddingTop: 250 }}>
              <TouchableOpacity
                style = {styles.loginButton}
                onPress = {() => {
                    handleSubmit();                    
                  }}>
                  <SimpleLineIcons name="login" size={18} color="white" style = {{ paddingRight: 5 }} />
                  <Text style = {styles.loginButtonText}>
                    Log in
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}  
  </Formik>
);

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
  errorMessage: {
    color: '#CC002C',
    alignSelf: 'center'
  }
})

export default LogIn;
