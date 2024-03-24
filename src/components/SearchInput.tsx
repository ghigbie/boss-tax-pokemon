import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { onChange } from '@gluestack-style/react'

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
    <View>
      <TextInput
        placeholder='Search for a pokemon here'
        onChangeText={handleChange}
        value={searchTerm}
      />
    </View>
  )
}

export default SearchInput