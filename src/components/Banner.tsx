import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

const Banner = () => {
  return (
      <Box width="100%" justifyContent="center" alignItems="center" style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </Box>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Banner;
