import { View, Text } from 'react-native'
import React from 'react'

export default function LoginForm(props) {
    // Bundle, Parámetros entre PANTALLAS
    console.log(props);
    const {name, surname} = props; // extraer name + surname

  return (
    <View>
      <Text>Hola {name} {surname} </Text>
      <Text>LoginForm</Text>
      <Text>LoginForm</Text>
    </View>
  )
}