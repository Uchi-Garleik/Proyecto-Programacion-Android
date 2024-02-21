import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokemonList from './src/screens/PokemonList';
import LoginForm from './src/screens/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStacks from './src/navigation/NavigationStacks';
import NavigationTabs from './src/navigation/NavigationTabs';
import Navigation from './src/navigation/Navigation';

export default function App() {
  // return <PokemonList />
  return (
    /*<View>
      <LoginForm name="Alberto" surname="Hernández Akkari"/>
      <LoginForm name="PEPE" surname="PEPE PEPE"/>
      <LoginForm name="LUIS" surname="LUIS LUIS"/>
      <LoginForm name="CARLA" surname="CARLA CARLA"/>
    </View>*/
    <NavigationContainer>
      {/*1º) <NavigationStacks /> */}
      <Navigation/>
    </NavigationContainer>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
