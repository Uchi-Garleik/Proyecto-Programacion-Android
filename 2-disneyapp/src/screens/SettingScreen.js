import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingScreen(props) {
  console.log(props);
  return (
    <SafeAreaView>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Text>SettingScreen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate("Home")}
        //ArrayFunction para que se ejecute cuando lo pulsamos
      ></Button>
    </SafeAreaView>
  );
}