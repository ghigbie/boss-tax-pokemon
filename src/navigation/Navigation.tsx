import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPokemon from '../screens/AllPokemon';
import DetailScreen from '../screens/DetailScreen';
import { COLORS } from '../constants/styles';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AllPokemon} options={{ headerShown: false }} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: true,
            title: 'Pokemon Detail',
            headerStyle: {
              backgroundColor: COLORS.darkGrey,
            },
            headerTintColor: COLORS.text,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: COLORS.text,
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
