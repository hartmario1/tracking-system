import { StyleSheet, Text, View } from "react-native";

// will later change to take data from api
export const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    start: 10,
    end: 12
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    start: 12,
    end: 14
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    start: 14,
    end: 18
  },
];

const Task = ({ title, start, end }: { title: string, start: number, end: number }) => (
  <View style = {styles.item}>
    <Text style = {styles.title}>{start} - {end}</Text>
    <Text style = {styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E9EBF8',
    padding: 10,
    marginVertical: 3,
    width: '100%',
    borderRadius: 10
    
  },
  title: {
    fontSize: 15,
  },
})

export default Task;
