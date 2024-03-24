import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { Box } from "@gluestack-ui/themed"
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import PokemonCard from '../components/PokemonDetailCard';
import { toTitleCase } from '../utils/utils';
import { RootStackParamList } from '../types/types';
import { getPokemonDetail } from '../api_services/get_services';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: DetailScreenRouteProp;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
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


export default DetailScreen;
