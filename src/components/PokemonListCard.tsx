import { Pressable, StyleSheet } from 'react-native';
import { Card, Text, Heading, ArrowRightIcon, HStack, Icon } from '@gluestack-ui/themed';
import { toTitleCase } from '../utils/utils';
import { COLORS } from '../constants/styles';

interface PokemonListCardProps {
    name: string;
    url: string;
    navigation: any;
}

const styles =  StyleSheet.create({
    container: {
        marginVertical: 6,
        marginHorizontal: 8,
        backgroundColor: COLORS.black,
    },
})

const PokemonListCard = ({ name, url, navigation}: PokemonListCardProps) => {

    const handleOnPress = () => {
        navigation?.navigate("Detail", {name, url})
    }

    return (
    <Pressable onPress={handleOnPress}>
    <Card style={styles.container}>
      <Heading size="2xl" fontFamily="$heading" mb="$4" color="$white">
        {toTitleCase(name)}
      </Heading>
        <HStack alignItems="center">
          <Text
            size="lg"
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
            size="xl"
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