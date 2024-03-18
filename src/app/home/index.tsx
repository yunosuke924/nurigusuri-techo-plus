import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])
  return <View style={Styles.constainer}></View>
}

const Styles = StyleSheet.create({
  constainer: {
    flex: 1, // 画面いっぱいに広げる
    backgroundColor: '#fffff'
  }
})

export default List
