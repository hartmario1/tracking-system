import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import Clock from "../components/Clock";
import List from "../components/List";
import { RootTabScreenProps } from "../types";

const HomeScreen = ({ navigation }: RootTabScreenProps<'Home'>) => (
  <View style = {styles.container}>
    <Clock />
    <List />
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
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
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

export default HomeScreen;
