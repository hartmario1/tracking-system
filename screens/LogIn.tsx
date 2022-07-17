import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { RootTabScreenProps } from "../types";
import { Formik } from 'formik';
import * as Yup from 'yup';

const LogIn = ({ navigation }: RootTabScreenProps<'LogIn'>) => (
  <Formik initialValues={{ email: '', password: '' }}
      onSubmit = {values => console.log(values)}
      validationSchema = {Yup.object().shape({
        email: Yup.string().required('This field is required!'),
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
                EMAIL
              </Text>
              <TextInput 
                style = {styles.input} 
                blurOnSubmit
                placeholder = "Enter your email"
                value = {values.email}
                onChangeText = {handleChange('email')}
                onBlur = {handleBlur('email')} />
                {errors.email && touched.email
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.email}
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

            <View style = {{ paddingTop: 285 }}>
              <TouchableOpacity
                style = {styles.loginButton}
                onPress = {() => {
                    handleSubmit();
                    navigation.navigate('Admin');
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
