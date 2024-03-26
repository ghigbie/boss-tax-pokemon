import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Navigation from './src/navigation/Navigation';
import React from "react";
import AppContextProvider from './src/context/AppContext';
import pokemonTheme from "./src/theme/pokemonTheme";

export default function App() {
  return (
    <GluestackUIProvider config={{ ...config, theme: pokemonTheme }}>
      <AppContextProvider>
        <Navigation />
      </AppContextProvider>
    </GluestackUIProvider>
  )
};
