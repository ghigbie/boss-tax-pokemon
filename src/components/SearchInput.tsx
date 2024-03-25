import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@gluestack-style/react'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000', 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '80%',
        backgroundColor: '#00CED1',
        color: '#FFFFFF',
      },
})

type SearchInputProps = {
    onChangeFunc: (searchInput: string) => void
}


const SearchInput = ({onChangeFunc}: SearchInputProps) => {
  const [searchTerm, onChangeSearchTerm] = useState('');

  const handleChange = (inputText: string) => {
    onChangeSearchTerm(inputText);
    onChangeFunc?.(inputText);
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search for a pokemon here'
        onChangeText={handleChange}
        value={searchTerm}
      />
    </View>
  )
}

export default SearchInput