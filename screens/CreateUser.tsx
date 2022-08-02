import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { RootTabScreenProps } from "../types";
import Toast from 'react-native-root-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { requestHeaders } from "../api/headers";

const CreateUser = ({ navigation }: RootTabScreenProps<'CreateUser'>) => (
  <Formik initialValues={{ username: '', email: '', password: '', phone: '', first_name: '', last_name: '' }}
      onSubmit = {async values => {
        try {
          const data = await fetch('https://tracksystem.herokuapp.com/users', {
            method: 'post',
            headers: requestHeaders(),
            body: JSON.stringify({
              username: values.username,
              email: values.email,
              password: values.password,
              phone: values.phone,
              firstName: values.first_name,
              lastName: values.last_name,
              role: 'admin'
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
          <View style = {{ width: '95%' }}>
            <Text style = {styles.descriptionText}>
              Username
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

          <View style = {{ width: '95%', paddingTop: 10 }}>
            <Text style = {styles.descriptionText}>
              Email
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
            <Text style = {styles.descriptionText}>
              Password
            </Text>
            <TextInput
              style={styles.commitInput}
              blurOnSubmit
              onChangeText={handleChange('password')}
              onBlur = {handleBlur('password')}
              value={values.password}
              placeholder="Enter new password"
              secureTextEntry />
              {errors.password && touched.password
                ? (
                  <Text style = {styles.errorMessage}>
                    {errors.password}
                  </Text>
                )
                : null}
          </View>

          <View style = {{ width: '95%', paddingTop: 10 }}>
            <Text style = {styles.descriptionText}>
              Phone
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

          <View style = {styles.timeRow}>
            <View style = {{ width: '48%' }}>
              <Text style = {styles.descriptionText}>
                First Name
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
              <Text style = {styles.descriptionText}>
                Last Name
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

          <View style = {{ width: '95%', paddingTop: 20 }}>
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
        </SafeAreaView>
      )}
    </Formik>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  timeInput: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  commitInput: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 17,
    paddingLeft: 5
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
  }
})

export default CreateUser;
