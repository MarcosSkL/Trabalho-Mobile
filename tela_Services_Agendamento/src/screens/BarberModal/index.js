import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';

import Calendar from '../../components/Calendar'

export default props => {
  const navigation = useNavigation();
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Agendamento feito com Sucesso",
      "Ate mais",
      [
        
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return(
    <View style={styles.modalArea}>
        <View style={styles.modalBody}>
            <TouchableOpacity title="Back" onPress={() => {
        navigation.goBack()}} >
                <Image style={styles.expandIcon} source={require('../../assets/icon_voltar.png')} />
            </TouchableOpacity>
            <View style={styles.modalItem}>
                
                    <View style={styles.userInfo}>
                        <Image source={require('../../assets/Barbearia_avatar13.jpg')}style={styles.userAvatar} />
                        <Text style={styles.userName}>MARCIUS BARBEARIA</Text>
                    </View>
                
            </View>
            <View style={styles.modalItem}>
                <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>CORTE SOCIAL</Text>
                    <Text style={styles.servicePrice}> R$15,00</Text>
                </View>
            </View>
            <View style={styles.modalItem}>

                <Calendar />
                
            </View>
            <View style={styles.modalItem}>
                
                    <View style={styles.viewScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                            
                            <TouchableOpacity style={styles.timeItem} source={require('../../assets/nav_prev.png')}>
                                    <Text style={styles.timeItemText}>09:00</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeItem} source={require('../../assets/nav_prev.png')}>
                                    <Text style={styles.timeItemText}>10:30</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeItem} source={require('../../assets/nav_prev.png')}>
                                    <Text style={styles.timeItemText}>11:00</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.timeItem} source={require('../../assets/nav_prev.png')}>
                                    <Text style={styles.timeItemText}>12:00</Text>

                            </TouchableOpacity>
                            
                    </View>
                

            </View>

            <TouchableOpacity style={styles.finishButton} title={"2-Button Alert"} onPress={createTwoButtonAlert}>
                <Text style={styles.finishButtonText}>FINALIZAR AGENDAMENTO</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalArea: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    
  },
  modalBody: {
    
    backgroundColor: "#FF5C00",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10
  },
  expandIcon: {
    width: 30,
    height: 30,
    color: "#000000",
    marginBottom: 10
    
    },
  modalItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center"
  },
  userAvatar:{
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 15,
  },
  userName: {
    color: "#000000",
    fontSize:20,
    fontWeight: "bold"
  },
  serviceInfo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold"
  },
  servicePrice: {
    fontSize: 18,
    fontWeight: "bold"
  },
  finishButton: {
    backgroundColor: "#FFFFFF",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  finishButtonText: {
    color: "#FF5C00",
    fontSize: 17,
    fontWeight: "bold"
  },
  timeItem: {
    width: 75,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  timeItemText: {
    fontSize: 16
  },
  viewScroll: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  }
})