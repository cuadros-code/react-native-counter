import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from 'react-native'

// const { width, height } = Dimensions.get('window')

export const DimensionScreen = () => {

  const { width, height } = useWindowDimensions()

  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.purpleBox,
          width: width * .50
        }}></View>
        {/* <Text style={styles.title}>BoxObjectModel</Text> */}
        {/* <View style={styles.purpleBox}></View> */}
      </View>

      <Text style={styles.title}>w: { width }, height: { height }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: '50%',
    // width: '50%',
  }
})