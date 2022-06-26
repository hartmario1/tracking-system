import moment from "moment";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native"

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  setInterval(() => setTime(new Date().toLocaleString()), 1000);

  return (
    <View>
      <Text style = {styles.text}>
        {moment().format("dddd, MMMM Do YYYY, k:mm:ss")}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'poppins',
    fontSize: 18
  }
})

export default Clock;
