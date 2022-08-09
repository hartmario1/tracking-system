import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { User } from "../api/models/user";

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import Toast from "react-native-root-toast";
import { requestHeaders } from "../api/headers";
<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native";
=======
import { serverUrl } from '../utils/utils.core';
>>>>>>> 7e1cf98e8c73a945d9a0979af20c4b0ab643db0d

const Interns = ({ user }: { user: User }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style = {styles.item}>
      <View style = {{ margin: 10, width: '95%' }}>
        <View>
          <Text style = {styles.title}>Username:
            <Text style = {styles.date}> {user.username}</Text>
          </Text>
        </View>
        <View>
          <Text style = {styles.title}>First Name:
            <Text style = {styles.date}> {user.firstName}</Text>
          </Text>
        </View>
        <View>
          <Text style = {styles.title}>Last Name:
            <Text style = {styles.date}> {user.lastName}</Text>
          </Text>
        </View>
        <View style = {{ paddingBottom: 6 }}>
          <Text style = {styles.title}>Phone Number:
            <Text style = {styles.date}> {user.phone}</Text>
          </Text>
        </View>

        <View style = {{ flexDirection: 'row', width: '100%' }}>
          <TouchableOpacity
            style = {styles.showButton}
            onPress = {() => navigation.navigate('InternEntries')}>
            <AntDesign name="eyeo" size={18} color="#fff" />
            <Text style = {{ color: '#fff', fontWeight: 'bold', paddingLeft: 4 }}>
              Show Entries
            </Text>
          </TouchableOpacity>
          <Modal
            animationType = "slide"
            visible = {modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)} >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Are you sure you want to delete this user?</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={async() => {
                    try {
<<<<<<< HEAD
                      await fetch(`https://tracksystem.herokuapp.com/users/${encodeURIComponent(user.username)}?deleted=true`, {
                        method: 'put',
                        headers: requestHeaders()
=======
                      await fetch(`${serverUrl}/users/${encodeURIComponent(user.username)}`, {
                        method: 'PUT',
                        headers: requestHeaders(),
                        body: JSON.stringify({...user, ...{deleted: true}})
>>>>>>> 7e1cf98e8c73a945d9a0979af20c4b0ab643db0d
                      })

                      setModalVisible(!modalVisible);
                      Toast.show('User successfully deleted', {
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
          <TouchableOpacity style = {styles.deleteButton} onPress={() => setModalVisible(true)}>
            <Feather name="trash-2" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

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
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5371ff",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    padding: 5
  },
  deleteButton: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F34144",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 5
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

export default Interns;
