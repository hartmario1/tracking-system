import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

// will later change to take data from api
export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'added new button',
    start: 10,
    end: 12,
    type: 'FEAT'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'made api work',
    start: 12,
    end: 14,
    type: 'FIX'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'responsive design',
    start: 14,
    end: 18,
    type: 'FIX'
  },
];

const Task = ({ title, start, end, type }: { title: string, start: number, end: number, type: string }) => (
  <View style = {styles.item}>
    <View>
      <View style = {{ flexDirection: "row" }}>
        <Text style = {styles.title}>Started at: </Text>
        <Text style = {styles.type}>{start}</Text>
        <Text style = {styles.title}> | Ended at: </Text>
        <Text style = {styles.type}>{end}</Text>
      </View>
      <View style = {{ flexDirection: "row" }}>
        <Text style = {styles.type}>{type}: </Text>
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
  type: {
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
