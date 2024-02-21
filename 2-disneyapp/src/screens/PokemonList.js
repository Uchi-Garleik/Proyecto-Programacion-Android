import React from "react";
import PokemonCard from "../components/PokemonCard";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TextInput,
} from "react-native";

export default function PokemonList(props) {
  const { peliculas } = props;

  return (
    <FlatList
      data={peliculas}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PokemonCard item={item} />}
      // renderItem={({ item }) => (
      //   <View style={styles.card}>
      //     <Image source={{ uri: item.imagen }} style={styles.image} />
      //     <Text style={styles.name}>{item.name}</Text>
      //   </View>
      // )}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
  },
  container: {
    flex: 1,
    /*marginTop: 20,*/
  },
  picker: {
    margin: 5,
    height: 50,
    width: "80%",
    alignSelf: "center",
  },
});