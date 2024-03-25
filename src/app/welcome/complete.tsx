import { View, StyleSheet, Text } from 'react-native'
import { useNavigation, router } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'
import StartButton from '@/components/welcome/StartButton'
import Icon from '@/components/Icon'
import { COLOR } from '@/styles/colors'
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'

const List = (): JSX.Element => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const handleOnStart = (): void => {
    router.push('home')
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])

  return (
    <SafeAreaProvider>
      <View style={[styles.constainer, { paddingTop: insets.top }]}>
        <Text style={styles.title}>塗り薬手帳+</Text>
        <Text style={styles.body}>
          <Text style={{ color: COLOR.green60 }}>塗り薬手帳+</Text>
          は日々の塗り薬の塗布量を可視化することで肌の状態改善を目的としたサービスです{' '}
        </Text>
        <StartButton onPress={handleOnStart}>
          <View style={styles.innerButton}>
            <Text style={styles.innerButtonText}>始める</Text>
            <Icon name='arrow-right' size={18} color='#fff' />
          </View>
        </StartButton>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1, // 画面いっぱいに広げる
    alignItems: 'center',
    backgroundColor: COLOR.brown10
  },
  title: {
    color: COLOR.brown60,
    fontSize: 38,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    top: 0,
    fontWeight: 'bold',
    width: 300
  },
  body: {
    color: COLOR.brown60,
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    top: 0,
    width: 300
  },
  innerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerButtonText: {
    color: COLOR.white,
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default List
