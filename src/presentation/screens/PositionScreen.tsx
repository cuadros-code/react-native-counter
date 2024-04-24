import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox:{
    height: 100,
    width: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    top: 50
  },
  orangeBox:{
    height: 100,
    width: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white'
  }
})