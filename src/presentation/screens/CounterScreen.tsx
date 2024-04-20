import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import { PrimaryButton } from '../components'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(0)

  const onPress = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <Button
        onPress={onPress}
        mode='contained-tonal'
        onLongPress={() => setCounter(0)}
      >
        Increment
      </Button>
      {/* <PrimaryButton
        onPress={onPress}
        onLongPress={() => setCounter(0)}
        text='Increment'
      /> */}
      {/* <Pressable
        onPress={onPress}
        onLongPress={() => setCounter(0)}
        style={ ({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
      >
        <Text style={styles.buttonText}>Increment</Text>
      </Pressable> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
  // button:{
  //   backgroundColor: Platform.OS === 'android' ? '#5865D6' : '#000',
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   borderRadius: 10,
  // },
  // buttonText:{
  //   color: '#ffffff',
  //   fontSize: 20,
  //   fontWeight: '500'
  // },
  // buttonPressed: {
  //   backgroundColor: Platform.OS === 'android' ? '#4746AB': '#292929',
  // }
})