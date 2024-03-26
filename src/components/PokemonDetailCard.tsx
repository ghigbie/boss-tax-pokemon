import React, { useState } from 'react';
import { 
  Image, 
  View, 
  StyleSheet, 
  Pressable, 
  TextInput 
} from 'react-native'; 
import { 
  Card, 
  Text, 
  Heading 
} from '@gluestack-ui/themed';
import { toTitleCase } from '../utils/utils';
import { PokemonDetail, PokemonInListType } from '../types/types';
import { useAppContext } from '../context/AppContext';
import { COLORS } from '../constants/styles';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '90%',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  heading: {
    marginBottom: 8,
    color: COLORS.text,
  },
  input: {
    width: '100%',
    color: COLORS.text,
  },
  imageStyle: {
    width: '100%', 
    height: 300,
    marginBottom: 16, 
  },
  detailsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: 16,
  },
  typeText: {
    color: COLORS.text,
  },
  detailText: {
    marginBottom: 16,
    color: COLORS.text,
  },
  listText: {
    marginLeft: 16,
    marginBottom: 8,
    color: COLORS.text,
  }
});

interface PokemonCardProps {
  name: string;
  pokemonDetail: PokemonDetail;
}

const PokemonDetailCard: React.FC<PokemonCardProps> = ({ name, pokemonDetail }) => {
  const { allPokemon, setAllPokemon } = useAppContext();
  const [canEditName, setCanEditName] = useState(false);
  const [editableName, setEditableName] = useState<string>(name);
  const [placeholder, setPlaceholder] = useState<string>(name);
  const { height, weight, sprites, types } = pokemonDetail;

  const handleChange = (inputText: string) => {
    setEditableName(inputText);
    setPlaceholder(inputText);
  };

  const editPokemonList = (newName: string) => {
    const updatedPokemonList = allPokemon.map((pokemon: PokemonInListType) => {
      if (pokemon.name === name) {
        return { ...pokemon, name: newName }; 
      }
      return pokemon;
    });
  
    const updatedPokemonIndex = updatedPokemonList.findIndex((pokemon: PokemonInListType) => pokemon.name === newName);
    if (updatedPokemonIndex !== -1) {
      const updatedPokemon = updatedPokemonList.splice(updatedPokemonIndex, 1)[0]; 
      setAllPokemon([updatedPokemon, ...updatedPokemonList]); 
    } else {
      setAllPokemon(updatedPokemonList);
    }
  };

  return (
    <Card p="$5" borderRadius="$3xl" maxWidth={'80%'} m="$3" style={styles.container}>
      <Pressable onPress={() => setCanEditName(true)} disabled={canEditName}>
        {!canEditName ? (
          <Heading size="md" fontFamily="$heading" mb="$4" style={styles.heading}>
            {toTitleCase(editableName)}
          </Heading>
        ) : (
          <TextInput
            placeholder={toTitleCase(editableName)}
            onChangeText={handleChange}
            style={styles.input}
            value={toTitleCase(editableName)}
            onFocus={() => {
              setEditableName('');
              setPlaceholder('');
            }}
            onBlur={() => {
              if (editableName) {              
                setCanEditName(false);
                editPokemonList(editableName);
              } else {
                setEditableName(name);
                setPlaceholder(name);
              }
            }}
          />
        )}
      </Pressable>

      <Image style={styles.imageStyle} source={{ uri: sprites?.front_default }} resizeMode='contain' />

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Height: {height}</Text>
        <Text style={styles.detailText}>Weight: {weight}</Text>
        <View style={styles.detailText}>
          <Text style={styles.typeText}>Type:</Text>
          {types?.map((type: any) => (
            <Text style={styles.listText} key={type.type.name}>
              {toTitleCase(type.type.name)}
            </Text>
          ))}
        </View>
      </View>
    </Card>
  );
};

export default PokemonDetailCard;
