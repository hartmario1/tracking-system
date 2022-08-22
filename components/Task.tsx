import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { requestHeaders } from "../api/headers";
import { serverUrl } from "../utils/utils.core";
import Toast from "react-native-root-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setTask } from "../features/taskSlice";

const Task = ({ _id, title, start, end, date, description }: { _id: string; title: string, start: string, end: string, date: string, description: string }) => {
  const formattedDate = new Date(date);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return(
    <View style = {styles.item}>
      <View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Title: </Text>
          <Text style = {styles.date}>{title}</Text>
        </View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Started at: </Text>
          <Text style = {styles.date}>{start}</Text>
          <Text style = {styles.title}> | Ended at: </Text>
          <Text style = {styles.date}>{end}</Text>
        </View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Date: </Text>
          <Text style = {styles.date}>{`${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`}</Text>
        </View>
        <View style = {{ flexDirection: "row" }}>
          <Text style = {styles.title}>Description: </Text>
          <Text style = {styles.date}>{description}</Text>
        </View>
      </View>

      <View style = {styles.icons}>
        <TouchableOpacity onPress = {() => {
          dispatch(setTask({ _id, title, start, end, date, description }))
          navigation.navigate('EditTask');
        }}>
          <Feather name="edit-2" size={19} color="#5371ff" />
        </TouchableOpacity>

        <Modal
          animationType = "slide"
          visible = {modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)} >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you sure you want to delete this task?</Text>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={async() => {
                  try {
                    await fetch(`${serverUrl}/tasks/${_id}`, {
                      method: 'delete',
                      headers: requestHeaders(),
                    })

                    setModalVisible(!modalVisible);
                    
                    Toast.show('Task successfully deleted', {
                      duration: Toast.durations.LONG,
                      position: -100,
                      shadow: true,
                      animation: true,
                      delay: 0
                    });

                    // if (status === not good) {
                      // Toast.show('Something went wrong, please try again!', {
                      //   duration: Toast.durations.LONG,
                      //   position: -100,
                      //   shadow: true,
                      //   animation: true,
                      //   delay: 0
                    // }
                  } catch(e) {
                    console.log(e);
                    }
                  }
                }>
                <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name="trash-2" size={18} color="#fff" />
                  <Text style={styles.textStyle}>Delete</Text>
                </View>
              </TouchableOpacity>
              <View style = {{ paddingTop: 10, width: '100%' }}>
                <TouchableOpacity 
                  style={styles.buttonCancel} 
                  onPress = {() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather name="trash-2" size={19} color="#B80600" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

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
    fontSize: 15,
  },
  date: {
    color: '#5371ff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  icons: {
    flex: 1,
    alignItems: 'flex-end'
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "90%"
  },
  buttonClose: {
    backgroundColor: "#F34144",
    borderRadius: 18,
    padding: 10,
    elevation: 2,
    width: '100%',
    alignItems: 'center'
  },
  buttonCancel: {
    backgroundColor: "#CBCBCB",
    borderRadius: 18,
    padding: 10,
    elevation: 2,
    width: '100%',
    alignItems: 'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: "center"
  }
})

export default Task;
