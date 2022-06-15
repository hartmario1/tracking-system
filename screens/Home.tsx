import { StyleSheet, View } from "react-native";
import AddNewTaskButton from "../components/AddNewTaskButton";
import Clock from "../components/Clock";
import List from "../components/List";

const HomeScreen = () => (
  <View style = {styles.container}>
    <Clock />
    <List />
    <AddNewTaskButton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default HomeScreen;
