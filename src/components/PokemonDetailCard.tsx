import React from 'react';
import { Image, View, StyleSheet } from 'react-native'; 
import { Card, Text, Heading, HStack, Icon, Link, LinkText } from '@gluestack-ui/themed';
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
})

interface PokemonCardProps {
    name: string;
    pokemonDetail: PokemonDetail;
}

const PokemonDetailCard: React.FC<PokemonCardProps> = ({ name, pokemonDetail }) => {
    const { height, weight, sprites, types } = pokemonDetail;

    return (
        <Card p="$5" borderRadius="$lg" maxWidth={'80%'} m="$3" style={styles.container}>
            <Heading size="md" fontFamily="$heading" mb="$4" style={styles.heading}>
                {toTitleCase(name)}
            </Heading>
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
                  </Text>)}
            </View>
            </View>
        </Card>
    );
};

export default PokemonDetailCard;
