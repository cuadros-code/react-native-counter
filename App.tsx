import React from 'react'
import { HelloScreen } from './src/presentation/screens/HelloScreen'
import { SafeAreaView } from 'react-native'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloScreen name='Kevin Cuadros'/> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}
