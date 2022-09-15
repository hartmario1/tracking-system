import { StyleSheet, TextInput, View } from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 

const Searchbar = ({ text, searchPhrase, setSearchPhrase }: { text: string, searchPhrase: string, setSearchPhrase: React.Dispatch<React.SetStateAction<string>> }) => (
    <View style = {styles.searchBar}>
      <EvilIcons name="search" size={26} color="#5371ff" />
      <TextInput
        style = {{ width: '100%', height: '100%' }}
        onChangeText = {setSearchPhrase}
        value = {searchPhrase}
        placeholder = {text} />
    </View>
);

const styles = StyleSheet.create({
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

export default Searchbar;