import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ChapterCard({ title, unlocked, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.card, !unlocked && styles.locked]} 
      onPress={onPress}
      disabled={!unlocked}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>
        {unlocked ? 'Unlocked' : 'Locked'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center'
  },
  locked: {
    backgroundColor: '#f0f0f0',
    opacity: 0.7
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  status: {
    color: '#666',
    fontSize: 14
  }
})