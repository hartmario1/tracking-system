import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const Interns = ({ username, fname, lname, phone }: { username: string, fname: string, lname: string, phone: string }) => (
  <SafeAreaView style = {styles.item}>
    <View style = {{ margin: 10, width: '95%' }}>
      <View>
        <Text style = {styles.title}>Username: 
          <Text style = {styles.date}> {username}</Text>
        </Text>
      </View>
      <View>
        <Text style = {styles.title}>First Name: 
          <Text style = {styles.date}> {fname}</Text>
        </Text>
      </View>
      <View>
        <Text style = {styles.title}>Last Name: 
          <Text style = {styles.date}> {lname}</Text>
        </Text>
      </View>
      <View style = {{ paddingBottom: 6 }}>
        <Text style = {styles.title}>Phone Number: 
          <Text style = {styles.date}> {phone}</Text>
        </Text>
      </View>
      <TouchableOpacity style = {styles.showButton}>
        <AntDesign name="eyeo" size={18} color="#fff" />
        <Text style = {{ color: '#fff', fontWeight: 'bold', paddingLeft: 4 }}>
          Show Entries
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E9EBF8',
    padding: 10,
    marginVertical: 3,
    width: '100%',
    borderRadius: 10,
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
  },
  date: {
    color: '#5371ff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  icons: {
    flex: 1,
    alignItems: 'flex-end'
  },
  showButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5371ff",
    borderRadius: 50,
    flexDirection: 'row',
    padding: 5
  }
})

export default Interns;
