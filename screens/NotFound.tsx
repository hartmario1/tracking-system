import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen = () => (
  <View style = {styles.container}>
    <Text>
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
  }
})

export default NotFoundScreen;
