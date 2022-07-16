import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { RootTabScreenProps } from "../types";
import Toast from 'react-native-root-toast';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CreateTask = ({ navigation }: RootTabScreenProps<'CreateTask'>) => {
  return (
    <Formik initialValues={{ title: '', started: '', ended: '' }}
        onSubmit = {values => console.log(values)}
        validationSchema = {Yup.object().shape({
          title: Yup.string().required('This field is required!'),
          started: Yup.string().required('This field is required!'),
          ended: Yup.string().required('This field is required!')
        })}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <SafeAreaView style = {styles.container}>
            <View style = {{ width: '95%' }}>
              <Text style = {styles.descriptionText}>
                Title
              </Text>
              <TextInput
                style={styles.commitInput}
                blurOnSubmit
                onChangeText={handleChange('title')}
                onBlur = {handleBlur('title')}
                value={values.title}
                placeholder="Write a brief description of what you did" />
                {errors.title && touched.title
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.title}
                    </Text>
                  )
                  : null}
            </View>

            <View style = {styles.timeRow}>
              <View style = {{ width: '48%' }}>
                <Text style = {styles.descriptionText}>
                  Started at
                </Text>
                <TextInput
                  style={styles.timeInput}
                  onChangeText = {handleChange('started')}
                  onBlur = {handleBlur('started')}
                  value = {values.started}
                  blurOnSubmit
                  placeholder="Enter start time"
                  keyboardType="numeric" />
                  {errors.started && touched.started
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.started}
                    </Text>
                  )
                  : null}
              </View>
              <View style = {{ width: '48%' }}>
                <Text style = {styles.descriptionText}>
                  Ended at
                </Text>
                <TextInput
                style={styles.timeInput}
                onChangeText = {handleChange('ended')}
                onBlur = {handleBlur('ended')}
                value = {values.ended}
                blurOnSubmit
                placeholder="Enter end time"
                keyboardType="numeric" />
                {errors.ended && touched.ended
                  ? (
                    <Text style = {styles.errorMessage}>
                      {errors.ended}
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
                    Toast.show('New entry created', {
                      duration: Toast.durations.LONG,
                      position: -100,
                      shadow: true,
                      animation: true,
                      delay: 0,
                    });
                    navigation.goBack();
                  }}>
                  <Entypo name="plus" size={18} color="#fff" />
                  <Text style = {styles.addEntryText}>
                    Create new entry
                  </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )}
      </Formik>
  )
}

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

export default CreateTask;
