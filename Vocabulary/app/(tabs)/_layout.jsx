import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' ,}} />
        <Tabs.Screen name="rewards" options={{ title: 'Rewards' }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({})