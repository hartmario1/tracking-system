import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Clock from "../components/Clock";
import List from "../components/AdminList";

const InternScreen = () => (
  <SafeAreaView style = {styles.container}>
    <StatusBar
      animated = {true}
      backgroundColor = '#fff'
      barStyle = 'dark-content' />
    <View style = {{ paddingTop: 6 }}>
      <Clock />
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
  }
})

export default InternScreen;