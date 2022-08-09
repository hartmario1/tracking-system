import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "../components/InternList";

const InternEntries = () => (
  <SafeAreaView style = {styles.container}>
    <StatusBar
      animated = {true}
      backgroundColor = '#fff' 
      style="dark"/>
    <View style = {{ paddingTop: 6 }}>
      <Text>
        USER
      </Text>
    </View>
    <List />
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

export default InternEntries;
