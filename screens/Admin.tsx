import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Clock from "../components/Clock";
import List from "../components/AdminList";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

const InternScreen = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar
        animated = {true}
        backgroundColor = '#fff'
        barStyle = 'dark-content' />
      <View style = {{ paddingTop: 6 }}>
        <Clock />
      </View>
      <Searchbar 
        text = "Search for an intern"
        searchPhrase = {searchPhrase}
        setSearchPhrase = {setSearchPhrase} />
      <List searchPhrase= {searchPhrase} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  searchBar: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
    borderWidth: 1,
    padding: 9,
    width: '95%',
    borderRadius: 19,
    backgroundColor: "#E9EBF8",
    borderColor: "#E9EBF8"
  }
})

export default InternScreen;