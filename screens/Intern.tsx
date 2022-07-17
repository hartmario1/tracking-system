import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import Clock from "../components/Clock";
import List from "../components/InternList";
import { RootTabScreenProps } from "../types";

const InternScreen = ({ navigation }: RootTabScreenProps<'Intern'>) => (
  <SafeAreaView style = {styles.container}>
    <StatusBar
      animated = {true}
      backgroundColor = '#fff'
      barStyle = 'dark-content' />
    <View style = {{ paddingTop: 6 }}>
      <Clock />
    </View>
    <List />
    <View style = {{ width: '95%', paddingBottom: 10 }}>
      <TouchableOpacity
        style = {styles.addButton}
        onPress = {() => navigation.navigate('CreateTask')} >
          <Entypo name="plus" size={18} color="#fff" />
          <Text style = {styles.addButtonText}>
            Add New
          </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  addButton: {
    justifyContent: 'center',
    backgroundColor: "#5371ff",
    padding: 12,
    borderRadius: 50,
    flexDirection: 'row',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default InternScreen;
