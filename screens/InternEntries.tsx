import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "../components/EntriesOfEachIntren";
import { store } from "../store";

const InternEntries = () => {
  const user = store.getState()

  return(
    <SafeAreaView style = {styles.container}>
      <StatusBar
        animated = {true}
        backgroundColor = '#fff' 
        style="dark"/>
      <View style = {{ paddingTop: 6 }}>
        <Text style = {styles.text}>
          {user.intern.intern}
        </Text>
      </View>
      <List />
    </SafeAreaView>
  )
};

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
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 18,
    color: "#5371ff",
  }
})

export default InternEntries;
