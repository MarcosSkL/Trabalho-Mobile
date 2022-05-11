import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const Btn2 = (props, {onPress}) => {
  return(
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
      >
         <Text style={styles.botaotexto}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FF5C00',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 20,
    marginTop: 20,
    borderRadius: 45,
  },
  botaotexto: {
    color: 'white',
    fontSize: 12,
  },
})

export default Btn2
