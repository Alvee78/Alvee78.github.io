import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChapterCard from '../../Components/ChapterCard'
export default function home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> tab page home</Text>
      <ChapterCard
  title="Chapter 1"
  unlocked={true}
  onPress={() => handleChapterPress(1)}
/>
    </View>
  )
}

const styles = StyleSheet.create({})