import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@gluestack-style/react'
import { COLORS } from '../constants/styles'

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: COLORS.black,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 32,
    backgroundColor: COLORS.darkGrey,
    color: COLORS.text,
    paddingLeft: 10,
    borderRadius: 16,
  },
})

type BannerSearchInputProps = {
  onChangeFunc: (searchInput: string) => void
}

const BannerSearchInput = ({ onChangeFunc }: BannerSearchInputProps) => {
  const [searchTerm, onChangeSearchTerm] = useState('');
  const [showPlacehodler, setShowPlaceholder] = useState(true);

  const handleChange = (inputText: string) => {
    onChangeSearchTerm(inputText);
    onChangeFunc?.(inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={showPlacehodler ? 'Search for a pokemon here' : ''}
        onFocus={() => setShowPlaceholder(false)}
        onBlur={() => {searchTerm.trim() === '' && setShowPlaceholder(true)}}
        onChangeText={handleChange}
        value={searchTerm}
        placeholderTextColor={COLORS.text} // Use the theme color for placeholder text
      />
    </View>
  )
}

export default BannerSearchInput
