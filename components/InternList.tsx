import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Task from "./Task";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://tracksystem.herokuapp.com/tasks');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  // change with relevant data from api
  const renderItem = ({ item }: { item: any }) => (
    <Task title = {item.title} start = {item.releaseYear} end = {item.releaseYear} day = {item.releaseYear} month = {item.releaseYear} year = {item.releaseYear} />
  );

  return (
    <SafeAreaView style = {styles.container}>
      {isLoading ? <ActivityIndicator color = '#5371ff' size='large' /> : (
        <FlatList
          data = {data}
          renderItem = {renderItem}
          keyExtractor = {item => item.id} />
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
