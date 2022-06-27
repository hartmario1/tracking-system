import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const Task = ({ title, start, end, day: day, month: month, year: year }: { title: string, start: number, end: number, day: string, month: string, year: string }) => (
  <View style = {styles.item}>
    <View>
      <View style = {{ flexDirection: "row" }}>
        <Text style = {styles.title}>Started at: </Text>
        <Text style = {styles.date}>{start}</Text>
        <Text style = {styles.title}> | Ended at: </Text>
        <Text style = {styles.date}>{end}</Text>
      </View>
      <View style = {{ flexDirection: "row" }}>
        <Text style = {styles.date}>{day}/</Text>
        <Text style = {styles.date}>{month}/</Text>
        <Text style = {styles.date}>{year}: </Text>
        <Text style = {styles.title}>{title}</Text>
      </View>
    </View>

    <View style = {styles.icons}>
      <TouchableOpacity>
        <Feather name="edit-2" size={19} color="#5371ff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="trash-2" size={19} color="#B80600" />
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E9EBF8',
    padding: 10,
    marginVertical: 3,
    width: '100%',
    borderRadius: 10,
    flexDirection: "row"
  },
  title: {
    fontSize: 15,
  },
  date: {
    color: '#5371ff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  icons: {
    position: 'absolute',
    right: 0,
    paddingRight: 8,
  }
})

export default Task;
