import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { FAB } from 'react-native-paper'
import { globalStyles } from '../theme/global.styles'

export const CounterM3Screen = () => {

  const [counter, setCounter] = useState(0)

  const onPress = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>
      {/* <Icon name='add-circle-outline' size={55} color={'#000'} /> */}
      <FAB
        icon="add"
        style={globalStyles.fab}
        onPress={onPress}
        onLongPress={() => setCounter(0)}
      />
    </View>
  )
}
