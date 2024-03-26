import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import PokemonListContainer from '../components/PokemonListContainer';
import BannerSearchInput from '../components/BannerSearchInput';
import { useAppContext } from '../context/AppContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { COLORS } from '../constants/styles';

type AllPokemonScreenNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'AllPokemon'>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGrey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 38,
  },
});

const AllPokemon = ({ navigation }: AllPokemonScreenNavigationProp) => {
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
  };

  return (
    <SafeAreaView style={styles.container}>
      {allPokemon.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <BannerSearchInput onChangeFunc={filterPokemonByName} />
          <PokemonListContainer pokemonData={allPokemonScreen} navigation={navigation} />
        </>
      )}
    </SafeAreaView>
  );
};

export default AllPokemon;
