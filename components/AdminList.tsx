import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { requestHeaders } from "../api/headers";
import { User } from "../api/models/user";
import Interns from "./Interns";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<User[]>();

  const getUsers = async () => {
    try {
      const response = await fetch('https://tracksystem.herokuapp.com/users', {
        method: 'get',
        headers: requestHeaders()
      });
      
      const json = await response.json();
      const users = json as User[];

      setData(users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Interns user = {item} />
  );

  return (
    <SafeAreaView style = {styles.container}>
      {isLoading ? <ActivityIndicator color = '#5371ff' size='large' /> : (
        <FlatList
          data = {data}
          renderItem = {renderItem}
          keyExtractor = {item => item._id} />
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
