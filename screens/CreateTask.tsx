import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';

const CreateTask = () => {
  const [startTime, onStartTimeChange] = useState('');
  const [endTime, onEndTimeChange] = useState('');
  const [commit, onCommitChange] = useState('')

  return (
    <SafeAreaView style = {styles.container}>

      <View style = {{ width: '95%' }}>
        <Text style = {styles.descriptionText}>
          Title
        </Text>
        <TextInput
          style={styles.commitInput}
          onChangeText={onCommitChange}
          value={commit}
          placeholder="Write a brief description of what you did" />
      </View>

      <View style = {styles.timeRow}>
        <View style = {{ width: '48%' }}>
          <Text style = {styles.descriptionText}>
            Started at:
          </Text>
          <TextInput
            style={styles.timeInput}
            onChangeText={onStartTimeChange}
            value={startTime}
            placeholder="Enter start time"
            keyboardType="numeric" />
        </View>
        <View style = {{ width: '48%' }}>
          <Text style = {styles.descriptionText}>
            Ended at:
          </Text>
          <TextInput
          style={styles.timeInput}
          onChangeText={onEndTimeChange}
          value={endTime}
          placeholder="Enter end time"
          keyboardType="numeric" />
        </View>
      </View>

      <View style = {{ width: '95%' }}>
        <TouchableOpacity
          style = {styles.addEntry}>
            <Entypo name="plus" size={18} color="#fff" />
            <Text style = {styles.addEntryText}>
              Create new entry
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  timeInput: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  commitInput: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 17,
    paddingLeft: 5
  },
  addEntry: {
    justifyContent: 'center',
    backgroundColor: "#5371ff",
    padding: 12,
    borderRadius: 50,
    flexDirection: 'row',
  },
  addEntryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 10,
  }
})

export default CreateTask;

// de descarcat POSTGRESQL
