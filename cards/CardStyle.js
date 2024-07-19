import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from './photoCards'
import Card from './Card'

const CardStyle = () => {
  return (
    <View>
      <FlatList 
      data={data}
      renderItem={({ item, index }) => {
        return (
            <Card 
            key={index}
            photo={item.photo}
            name={item.name}
            age={item.age}
            />
        )
      }}
      />
    </View>
  )
}

export default CardStyle

const styles = StyleSheet.create({})