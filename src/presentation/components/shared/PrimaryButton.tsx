import { Text, Pressable, Platform, StyleSheet, PressableProps } from 'react-native'

interface Props extends PressableProps {
  text: string
}

export const PrimaryButton = ( props: Props ) => {
  return (
    <Pressable
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={ ({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
    >
      <Text style={styles.buttonText}>
        {props.text}
      </Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  button:{
    backgroundColor: Platform.OS === 'android' ? '#5865D6' : '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500'
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB': '#292929',
  }
})