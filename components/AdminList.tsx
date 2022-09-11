import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { requestHeaders } from "../api/headers";
import Interns from "./Interns";
import { serverUrl } from '../utils/utils.core';
import { useQuery } from "react-query";

const List = () => {
  const getUsers = async () => {
    try {
      const response = await fetch(`${serverUrl}/users`, {
        method: 'get',
        headers: requestHeaders()
      });
      return response.json();
    } catch (error) {
      console.error(error);
    }
  }

  const { isLoading, isError, data, error }: any = useQuery(['users'], getUsers);

  const renderItem = ({ item }: { item: any }) => (
    <Interns user = {item} />
  );

  if (isLoading) return <ActivityIndicator color = '#5371ff' size='large' />
  if (isError) return <div>Error! {error.message}</div> 

  return (
    <SafeAreaView style = {styles.container}>
      <FlatList
        data = {data}
        renderItem = {renderItem}
        keyExtractor = {item => item._id} />
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
