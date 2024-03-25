import { View, StyleSheet, Text } from 'react-native'
import { COLOR } from '@/styles/colors'

interface Props {
  pageNumber: number
}
export const TopImage = ({ pageNumber }: Props): JSX.Element => {
  if (pageNumber === 1) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          塗り薬の<Text style={{ color: COLOR.green60 }}>残量</Text>や
        </Text>
        <Text style={styles.text}>あと何日でなくなるかをわかりやすく表示</Text>
      </View>
    )
  }
  if (pageNumber === 2) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          塗り薬の塗布量や頻度から
          <Text style={{ color: COLOR.green60 }}>塗りスコア</Text>
          を算出し日々の肌ケアをサポート
        </Text>
      </View>
    )
  }
  if (pageNumber === 3) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          塗りスコアと肌の状態から
          <Text style={{ color: COLOR.green60 }}>NURI AI</Text>がアドバイス
        </Text>
      </View>
    )
  }
  if (pageNumber === 4) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={{ color: COLOR.green60 }}>NFCタッチ</Text>
          で簡単に
        </Text>
        <Text style={styles.text}>塗布量を記録</Text>
      </View>
    )
  }
  if (pageNumber === 5) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          データを医師と<Text style={{ color: COLOR.green60 }}>共有</Text>して
          より適切な診察が可能
        </Text>
      </View>
    )
  }

  return <></>
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 40,
    zIndex: 100
  },
  text: {
    color: COLOR.brown80,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 360
  }
})

export default TopImage
