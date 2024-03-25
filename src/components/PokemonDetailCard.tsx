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
import { PokemonDetail } from '../types/types';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '90%',
    alignItems: 'center'
  },
  heading: {
    marginBottom: 8,
  },
  input: {
    width: '100%'
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
  detailText: {
    marginBottom: 16,
  },
  listText: {
    marginLeft: 16,
    marginBottom: 8
  }
});

interface PokemonCardProps {
  name: string;
  pokemonDetail: PokemonDetail;
}

const PokemonDetailCard: React.FC<PokemonCardProps> = ({ name, pokemonDetail }) => {
  const [editName, setEditName] = useState(false);
  const [editableName, setEditableName] = useState<string>(name);
  const { height, weight, sprites, types } = pokemonDetail;

  const handleChange = (inputText: string) => {
    setEditableName(inputText);
  };

  return (
    <Card p="$5" borderRadius="$lg" maxWidth={'80%'} m="$3" style={styles.container}>
      <Pressable onPress={() => setEditName(true)} disabled={editName}>
        {
          !editName ? 
          (
            <Heading size="md" fontFamily="$heading" mb="$4" style={styles.heading}>
              {toTitleCase(name)}
            </Heading>
          ) : (
            <TextInput 
              placeholder={toTitleCase(editableName)} 
              onChangeText={handleChange}  
              style={styles.input}
              value={toTitleCase(editableName)}
            />
          )
        }
      </Pressable>

      <Image
        style={styles.imageStyle}
        source={{ uri: sprites?.front_default }}
        resizeMode='contain'
      />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Height: {height}</Text>
        <Text style={styles.detailText}>Weight: {weight}</Text>
        <View style={styles.detailText}>
          <Text>Type:</Text>
          {types?.map((type: any) => 
            <Text  
              style={styles.listText}
              key={type.type.name}>
                {toTitleCase(type.type.name)}
            </Text>
          )}
        </View>
      </View>
    </Card>
  );
};

export default PokemonDetailCard;
