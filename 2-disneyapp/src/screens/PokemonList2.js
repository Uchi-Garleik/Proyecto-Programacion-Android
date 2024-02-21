import React, { useEffect, useState } from "react";
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image} from "react-native";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      const fetchPokemons = async () => {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=10"
          );
          const data = await response.json();
          for (const pokemon of data.results) {
            fetch(pokemon.url)
              .then((response) => response.json())
              .then((details) => {
                setPokemons((prevPokemons) => [...prevPokemons, details]); // rellena con un objet más
              });
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPokemons();
    }, []);
    
      return (
        <SafeAreaView style={styles.safeArea}>
          <FlatList
            data={pokemons}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Image
                  source={{ uri: item.sprites.front_default }}
                  style={styles.image}
                />
                <Text style={styles.text}>{item.name}</Text>
              </View>
          )}
      />
    </SafeAreaView>
      );
      
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Asegura que SafeAreaView use todo el espacio disponible
  },
  listItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default PokemonList;

