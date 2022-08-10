import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Tasks from "./Task";
import { requestHeaders } from "../api/headers";
import { TaskModel } from "../api/models/task";
import { store } from "../store";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<TaskModel[]>();
  const id = store.getState();

  const getTasks = async () => {
    try {
      const response = await fetch(`https://tracksystem.herokuapp.com/tasks?userId=${encodeURIComponent(id.userId.userId!)}`, {
        method: 'get',
        headers: requestHeaders()
      });

      const json = await response.json();
      const tasks = json as TaskModel[];
      setData(tasks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Tasks _id={item._id} title = {item.title} start = {item.startDate} end = {item.endDate} date = {item.taskDate} description = {item.description} />
  );

  return (
    <SafeAreaView style = {styles.container}>
      {isLoading ? <ActivityIndicator color = '#5371ff' size='large' /> : (
        <FlatList
          data = {data}
          renderItem = {renderItem}
          keyExtractor = {item => item.userId} />
      )}
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
