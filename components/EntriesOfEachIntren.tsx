import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Tasks from "./Task";
import { requestHeaders } from "../api/headers";
import { store } from "../store";
import { useQuery } from "react-query";
import { serverUrl } from "../utils/utils.core";

const List = () => {
  const id = store.getState();

  const getTasks = async () => {
    try {
      const response = await fetch(`${serverUrl}/tasks?userId=${encodeURIComponent(id.internId.internId!)}`, {
        method: 'get',
        headers: requestHeaders()
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  const { isLoading, isError, data, error }: any = useQuery(['tasks'], getTasks);

  const renderItem = ({ item }: { item: any }) => (
    <Tasks _id={item._id} title = {item.title} start = {item.startDate} end = {item.endDate} date = {item.taskDate} description = {item.description} />
  );

  if (isLoading) return <ActivityIndicator color = '#5371ff' size='large' />
  if (isError) return <div>Error! {error.message}</div> 

  return (
    <SafeAreaView style = {styles.container}>
      <FlatList
        data = {data}
        renderItem = {renderItem}
        keyExtractor = {item => item.userId} />
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
