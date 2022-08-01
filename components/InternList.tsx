import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Tasks from "./Task";
import { requestHeaders } from "../api/headers";
import { Task } from "../api/models/task";
// import { useSelector } from "react-redux";
// import { getTokenId } from "../features/tokenSlice";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Task[]>();
  // const token = useSelector(getTokenId)
  // console.log(token)

  const getTasks = async () => {
    try {
      const response = await fetch('https://tracksystem.herokuapp.com/tasks', {
        method: 'get',
        headers: requestHeaders()
      });

      const json = await response.json();
      const tasks = json as Task[];
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

  // change with relevant data from api
  const renderItem = ({ item }: { item: any }) => (
    <Tasks title = {item.title} start = {item.releaseYear} end = {item.releaseYear} day = {item.releaseYear} month = {item.releaseYear} year = {item.releaseYear} />
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
