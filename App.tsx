import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { HelloScreen } from './src/presentation/screens/HelloScreen'

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloScreen name='Kevin Cuadros'/> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}
