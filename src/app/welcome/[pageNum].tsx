import { View, StyleSheet, Text } from 'react-native'
import { useNavigation, useLocalSearchParams, router } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'
import NextButton from '@/components/welcome/NextButton'
import Icon from '@/components/Icon'
import { COLOR } from '@/styles/colors'
import TopImage from '@/components/welcome/TopImage'
import ExplanationText from '@/components/welcome/ExplanationText'

const BG_COLOR_MAP: Record<number, string> = {
  1: COLOR.green20,
  2: COLOR.orange20,
  3: COLOR.yellow20,
  4: COLOR.gray20,
  5: COLOR.purple20
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  const { pageNum } = useLocalSearchParams()
  // pageNumは文字列なので数値に変換
  const pageNumber = typeof pageNum === 'string' ? parseInt(pageNum, 10) : 1

  const handleOnPress = (): void => {
    router.push(`welcome/${pageNumber + 1}`)
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])

  const backgroundColor = BG_COLOR_MAP[pageNumber]
  return (
    <View style={[styles.constainer, { backgroundColor }]}>
      <Text style={styles.title}>{`塗り薬手帳+の機能 その${pageNumber}`}</Text>
      <TopImage pageNumber={pageNumber} />
      <ExplanationText pageNumber={pageNumber} />
      <View style={styles.bottomBackGround} />
      {pageNumber !== 5 && (
        <NextButton onPress={handleOnPress}>
          <Icon name='arrow-right' size={24} color='#fff' />
        </NextButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1, // 画面いっぱいに広げる
    alignItems: 'center'
  },
  title: {
    color: COLOR.brown80,
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    top: 0,
    borderColor: '#4F3422',
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: 'bold',
    width: 300
  },
  bottomBackGround: {
    position: 'absolute',
    bottom: -200,
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: COLOR.white
  },
  image: {
    position: 'absolute',
    top: -160,
    flex: 1,
    width: '100%',
    height: '100%'
  }
})

export default List
