import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Box, Button } from "@gluestack-ui/themed"
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../api_services/get_services';
import PokemonListContainer from '../components/PokemonListContainer';
import SearchInput from '../components/SearchInput';

type RootStackParamList = {
  Home: { name: string };
};

type AllPokemonScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AllPokemon = ({ navigation }: { navigation: AllPokemonScreenNavigationProp }) => {
  const [allPokemon, setAllPokemon] = useState<any[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getAllPokemon();
        setAllPokemon(pokemonData);
        setFilteredPokemon(pokemonData); 
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  const filterPokemonByName = (searchInput: string) => {
    const filteredValues = allPokemon.filter(pokemonData =>
      pokemonData.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPokemon(filteredValues);
  }

  return (
    <SafeAreaView style={styles.container}>
      {allPokemon.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <SearchInput onChangeFunc={filterPokemonByName} />
          <PokemonListContainer 
            pokemonData={filteredPokemon} 
            navigation={navigation} 
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default AllPokemon;
