import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import PokemonListCard from './PokemonListCard';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#dcecfa',
    },
});

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonListContainerProps {
  pokemonData: Pokemon[];
  navigation: any;
};

const PokemonListContainer = ( {pokemonData, navigation}: PokemonListContainerProps) => {

  const handleOnEndReached = () => {
    console.log("on end reached");
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        renderItem={({item}) => 
            <PokemonListCard 
                name={item.name} 
            url={item.url} 
            navigation={navigation}
            />}
        keyExtractor={item => item.name}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
};

export default PokemonListContainer ;