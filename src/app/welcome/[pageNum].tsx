import { View, StyleSheet, Text } from 'react-native'
import { useNavigation, useLocalSearchParams, router } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'
import NextButton from '@/components/welcome/NextButton'
import { COLOR } from '@/styles/colors'
import TopImage from '@/components/welcome/TopImage'
import ExplanationText from '@/components/welcome/ExplanationText'
import * as Progress from 'react-native-progress'
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'

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
  const pageNumber = typeof pageNum === 'string' ? parseInt(pageNum, 10) : 1

  const handleOnPress = (): void => {
    if (pageNumber === 5) {
      router.push('welcome/complete')
      return
    }
    router.push(`welcome/${pageNumber + 1}`)
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])

  const backgroundColor = BG_COLOR_MAP[pageNumber]
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.constainer,
          { backgroundColor },
          { paddingTop: insets.top }
        ]}
      >
        <Text
          style={styles.title}
        >{`塗り薬手帳+の機能 その${pageNumber}`}</Text>
        <TopImage pageNumber={pageNumber} />
        <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={pageNumber / 5}
            width={180}
            height={8}
            color={COLOR.brown60}
            unfilledColor={COLOR.brown20}
            borderWidth={0}
          />
        </View>
        <ExplanationText pageNumber={pageNumber} />
        <View style={styles.bottomBackGround} />
        <NextButton onPress={handleOnPress} />
      </View>
    </SafeAreaProvider>
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
  progressBarContainer: { marginTop: 50, zIndex: 10000 },
  bottomBackGround: {
    position: 'absolute',
    bottom: -200,
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: COLOR.white
  }
})

export default List
