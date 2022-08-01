import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { RootTabScreenProps } from "../types";
import Toast from 'react-native-root-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUp = ({ navigation }: RootTabScreenProps<'SignUp'>) => (
  <Formik initialValues={{ username: '', email: '', password: '', phone: '', first_name: '', last_name: '' }}
      onSubmit = {async values => {
        try {
          const data = await fetch('https://tracksystem.herokuapp.com/users', {
            method: 'post',
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'aplication/xml'
            }),
            body: JSON.stringify({
              username: values.username,
              email: values.email,
              password: values.password,
              role: "student",
              phone: values.phone,
              firstName: values.first_name,
              lastName: values.last_name
            })
          });

          if (data.status === 201) {
            Toast.show('New user created', {
              duration: Toast.durations.LONG,
              position: -100,
              shadow: true,
              animation: true,
              delay: 0,
            });

            navigation.goBack();
          } else {
            Toast.show('Something went wrong, please try again!', {
              duration: Toast.durations.LONG,
              position: -100,
              shadow: true,
              animation: true,
              delay: 0,
            });
          }

          return data;
        } catch (error) {
          console.error(error);
        };

      }}
      validationSchema = {Yup.object().shape({
        username: Yup.string().required('This field is required!'),
        email: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!'),
        phone: Yup.string().required('This field is required!'),
        first_name: Yup.string().required('This field is required!'),
        last_name: Yup.string().required('This field is required!')
      })}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <SafeAreaView style = {styles.container}>
          <View style = {{ paddingBottom: 60, marginHorizontal: 20, paddingTop: 30 }}>
            <Text style = {styles.logInText}>
              Create your <Text style = {{ color: '#5371ff' }}>account</Text>!
            </Text>
          </View>
          <View style = {{ alignItems: 'center' }}>
            <View style = {{ width: '95%' }}>
              <Text style = {styles.inputHeaders}>
                USERNAME
              </Text>
              <TextInput
                style={styles.commitInput}
                blurOnSubmit
                onChangeText={handleChange('username')}
                onBlur = {handleBlur('username')}
                value={values.username}
                placeholder="Enter new username" />
                {errors.username && touched.username
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.username}
                    </Text>
                  )
                  : null}
            </View>

            <View style = {styles.timeRow}>
              <View style = {{ width: '48%' }}>
                <Text style = {styles.inputHeaders}>
                  FIRST NAME
                </Text>
                <TextInput
                  style={styles.timeInput}
                  onChangeText = {handleChange('first_name')}
                  onBlur = {handleBlur('first_name')}
                  value = {values.first_name}
                  blurOnSubmit
                  placeholder="Enter first name" />
                  {errors.first_name && touched.first_name
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.first_name}
                    </Text>
                  )
                  : null}
              </View>
              <View style = {{ width: '48%' }}>
                <Text style = {styles.inputHeaders}>
                  LAST NAME
                </Text>
                <TextInput
                style={styles.timeInput}
                onChangeText = {handleChange('last_name')}
                onBlur = {handleBlur('last_name')}
                value = {values.last_name}
                blurOnSubmit
                placeholder="Enter last name" />
                {errors.last_name && touched.last_name
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.last_name}
                    </Text>
                  )
                  : null}
              </View>
            </View>

            <View style = {{ width: '95%', paddingTop: 10 }}>
              <Text style = {styles.inputHeaders}>
                EMAIL
              </Text>
              <TextInput
                style={styles.commitInput}
                blurOnSubmit
                onChangeText={handleChange('email')}
                onBlur = {handleBlur('email')}
                value={values.email}
                placeholder="Enter new email" />
                {errors.email && touched.email
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.email}
                    </Text>
                  )
                  : null}
            </View>

            <View style = {{ width: '95%', paddingTop: 10 }}>
              <Text style = {styles.inputHeaders}>
                PASSWORD
              </Text>
              <TextInput
                style={styles.commitInput}
                blurOnSubmit
                onChangeText={handleChange('password')}
                onBlur = {handleBlur('password')}
                value={values.password}
                placeholder="Enter new password" />
                {errors.password && touched.password
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.password}
                    </Text>
                  )
                  : null}
            </View>

            <View style = {{ width: '95%', paddingTop: 10, paddingBottom: 160 }}>
              <Text style = {styles.inputHeaders}>
                PHONE
              </Text>
              <TextInput
                style={styles.commitInput}
                blurOnSubmit
                onChangeText={handleChange('phone')}
                onBlur = {handleBlur('phone')}
                value={values.phone}
                placeholder="Enter phone number" />
                {errors.phone && touched.phone
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.phone}
                    </Text>
                  )
                  : null}
            </View>

            <View style = {{ width: '95%' }}>
              <TouchableOpacity
                style = {styles.addEntry}
                onPress = {() => {
                    handleSubmit();
                  }}>
                  <Entypo name="plus" size={18} color="#fff" />
                  <Text style = {styles.addEntryText}>
                    Create new user
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
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  inputHeaders: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 5
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    width: '100%'
  },
  timeInput: {
    height: 40,
    margin: 5,
    borderBottomWidth: 1,
    padding: 10,
  },
  commitInput: {
    height: 40,
    margin: 5,
    borderBottomWidth: 1,
    padding: 10,
  },
  addEntry: {
    justifyContent: 'center',
    backgroundColor: "#5371ff",
    padding: 12,
    borderRadius: 50,
    flexDirection: 'row',
  },
  addEntryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  errorMessage: {
    color: '#CC002C',
    alignSelf: 'center'
  },
  logInText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
})

export default SignUp;
