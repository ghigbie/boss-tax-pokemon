import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useEffect, useState } from 'react';
import PokemonListContainer from '../components/PokemonListContainer';
import SearchInput from '../components/SearchInput';
import { useAppContext } from '../context/AppContext';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type AllPokemonScreenRouteProp = RouteProp<RootStackParamList, 'AllPokemon'>;

type AllPokemonScreenNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'AllPokemon'>;
};

type AllPokemonScreenProps = {
  navigation: AllPokemonScreenNavigationProp;
  route?: AllPokemonScreenRouteProp;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AllPokemon = ({ navigation }: AllPokemonScreenProps) => {
  const { allPokemon } = useAppContext();
  const [allPokemonScreen, setAllPokemonScreen] = useState<any[]>(allPokemon);
  const [originalPokemonData, setOriginalPokemonData] = useState<any[]>(allPokemon);

  useEffect(() => {
    setOriginalPokemonData(allPokemon);
    setAllPokemonScreen(allPokemon);
  }, [allPokemon]);

  const filterPokemonByName = (searchInput: string) => {
    const filteredValues = originalPokemonData.filter(pokemonData =>
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
