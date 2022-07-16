import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen = () => (
  <View style = {styles.container}>
    <Text style = {styles.text}>
      Oops! Looks like we couldn't find what you are looking for...
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'center'
  }
})

export default NotFoundScreen;
