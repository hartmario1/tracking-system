import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Task, { DATA } from "./Task";

const List = () => {
  const renderItem = ({ item }: { item: any }) => (
    <Task title = {item.title} start = {item.start} end = {item.end} />
  );

  return (
    <SafeAreaView style = {styles.container}>
      <FlatList
        data = {DATA}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    width: '95%',
  },
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
});

export default List;
