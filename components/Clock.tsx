import moment from "moment";
import { useState } from "react";
import { Text, View } from "react-native"

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  setInterval(() => setTime(new Date().toLocaleString()), 1000);

  return (
    <View>
      <Text>
        {moment().format("dddd, MMMM Do YYYY, k:mm:ss")}
      </Text>
    </View>
  )
}

export default Clock;
