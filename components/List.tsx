import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "../api/entries";
import Task from "./Task";

const List = () => {
  const renderItem = ({ item }: { item: any }) => (
    <Task title = {item.title} start = {item.start} end = {item.end} day = {item.day} month = {item.month} year = {item.year} />
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
    paddingTop: -50
  }
});

export default List;
