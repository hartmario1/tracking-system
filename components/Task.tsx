import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const Task = ({ title, start, end, date, description }: { title: string, start: string, end: string, date: string, description: string }) => {
  const formattedDate = new Date(date);

  return(
    <View style = {styles.item}>
      <View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Title: </Text>
          <Text style = {styles.date}>{title}</Text>
        </View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Started at: </Text>
          <Text style = {styles.date}>{start}</Text>
          <Text style = {styles.title}> | Ended at: </Text>
          <Text style = {styles.date}>{end}</Text>
        </View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Date: </Text>
          <Text style = {styles.date}>{`${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`}</Text>
        </View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Description: </Text>
          <Text style = {styles.date}>{description}</Text>
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
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E9EBF8',
    padding: 10,
    marginVertical: 3,
    width: '100%',
    borderRadius: 10,
    flexDirection: "row",
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
    flex: 1,
    alignItems: 'flex-end'
  }
})

export default Task;
