import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 70,
    fontWeight: '500',
    color: '#000'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 30,
    bottom: Platform.OS === 'android' ? 30 : 10,
  },
})