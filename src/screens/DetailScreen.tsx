import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import PokemonCard from '../components/PokemonDetailCard';
import { toTitleCase } from '../utils/utils';
import { RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { getPokemonDetail } from '../api_services/get_services';
import { COLORS } from '../constants/styles';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenNavigationProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: DetailScreenRouteProp;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DetailScreen: React.FC<DetailScreenNavigationProps> = ({ route, navigation }) => {
  const { name, url } = route.params;
  const [pokemonDetail, setPokemonDetail] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonDetail(url);
        setPokemonDetail(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <SafeAreaView style={styles.container}>
      {!pokemonDetail ? (
        <Text>Fetching data for {toTitleCase(name)}...</Text>
      ) : (
        <PokemonCard name={name} pokemonDetail={pokemonDetail} />
      )}
    </SafeAreaView>
  );
};

export default DetailScreen as React.ComponentType;
