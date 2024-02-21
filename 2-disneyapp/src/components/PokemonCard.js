import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function PokemonCard(props) {
  const { item } = props;
  const navigation = useNavigation();
  //console.log("parámetros props", pokemon);
  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${item.id}`);
    //console.log(item);
    navigation.navigate("Pokemon", { id: item.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={{ uri: item.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    width: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "grey",
  },
  /*number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },*/
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 10,
    width: 100,
    height: 85,
  },
});