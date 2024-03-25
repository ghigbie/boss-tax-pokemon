import { Pressable, StyleSheet } from 'react-native';
import { Card, Text, Heading, ArrowRightIcon, HStack, Icon, Link, LinkText } from '@gluestack-ui/themed';
import { toTitleCase } from '../utils/utils';

interface PokemonListCardProps {
    name: string;
    url: string;
    navigation: any;
}

const styles =  StyleSheet.create({
    container: {
        marginVertical: 6,
        marginHorizontal: 8,
    }
})

const PokemonListCard = ({ name, url, navigation}: PokemonListCardProps) => {

    const handleOnPress = () => {
        navigation?.navigate("Detail", {name, url})
    }

    return (
    <Pressable onPress={handleOnPress}>
    <Card style={styles.container}>
      <Heading size="md" fontFamily="$heading" mb="$4">
        {toTitleCase(name)}
      </Heading>
        <HStack alignItems="center">
          <Text
            size="sm"
            fontFamily="$heading"
            fontWeight="$semibold"
            color="$primary600"
            $dark-color="$primary300"
            textDecorationLine="none"
          >
            See Details
          </Text>

          <Icon
            as={ArrowRightIcon}
            size="lg"
            color="$primary600"
            mt="$0.5"
            ml="$1"
            $dark-color="$primary300"
          />
        </HStack>
    </Card>
    </Pressable>
);
}


export default PokemonListCard;