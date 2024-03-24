import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Box, Button } from "@gluestack-ui/themed"
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../api_services/getServices';
import PokemonListContainer from '../components/PokemonListContainer';
import SearchInput from '../components/SearchInput';
import { useAppContext } from '../context/AppContext';

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
  const { allPokemon } = useAppContext();
  const [allPokemonScreen, setAllPokemonScreen] = useState<any[]>(allPokemon);

  
  const filterPokemonByName = (searchInput: string) => {
    const filteredValues = allPokemonScreen.filter(pokemonData =>
      pokemonData?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setAllPokemonScreen(filteredValues);
  }

  return (
    <SafeAreaView style={styles.container}>
      {allPokemon.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <SearchInput onChangeFunc={filterPokemonByName} />
          <PokemonListContainer 
            pokemonData={allPokemonScreen} 
            navigation={navigation} 
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default AllPokemon;
