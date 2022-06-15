import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { RootTabScreenProps } from "../types";

const AddNewTaskButton = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style = {{ width: '95%' }}>
      <TouchableOpacity
        style = {styles.button}
        onPress = {() => navigation.navigate('CreateTask')} >
          <Entypo name="plus" size={18} color="#fff" />
          <Text style = {styles.text}>
            Add New
          </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: "#5371ff",
    padding: 12,
    borderRadius: 50,
    flexDirection: 'row'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default AddNewTaskButton;
