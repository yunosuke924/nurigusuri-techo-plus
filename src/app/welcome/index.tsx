import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'
import { COLOR } from '@/styles/colors'

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])
  return (
    <View style={Styles.constainer}>
      <Text style={Styles.title}>塗り薬手帳+の機能 その1</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  constainer: {
    flex: 1, // 画面いっぱいに広げる
    backgroundColor: '#fffff',
    alignItems: 'center'
  },
  title: {
    color: COLOR.brown80,
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    top: 0,
    borderColor: COLOR.brown80,
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: 'bold',
    width: 300
  }
})

export default List
