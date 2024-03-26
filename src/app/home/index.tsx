import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { useNavigation } from 'expo-router'
import { useEffect } from 'react'
import LogoutButton from '@/components/LogoutButton'
import { COLOR } from '@/styles/colors'
import { Icon } from 'react-native-elements'

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.topNavigation}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ fontSize: 18, color: COLOR.white, fontWeight: 'bold' }}
            >
              2024年3月26日
            </Text>
            <Icon name='settings' color={COLOR.white} />
            <Icon name='settings' color={COLOR.white} />
          </View>
          <Text
            style={{ fontSize: 24, color: COLOR.white, fontWeight: 'bold' }}
          >
            峯岸佑乃介
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Icon name='settings' color={COLOR.white} />
            <Text
              style={{ fontSize: 18, color: COLOR.white, fontWeight: 'bold' }}
            >
              有料プラン
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{ fontSize: 18, color: COLOR.brown80, fontWeight: 'bold' }}
          >
            サマリー
          </Text>
          <Icon name='settings' color={COLOR.white} />
        </View>
      </ScrollView>
      <View style={styles.bottomNaviagation}></View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.brown10
  },
  topNavigation: {
    backgroundColor: COLOR.brown80,
    height: 200,
    width: '100%',
    borderRadius: 40
  },
  padding200: {
    height: 200
  },
  bottomNaviagation: {
    backgroundColor: COLOR.white,
    position: 'absolute',
    height: 80,
    width: '100%',
    bottom: 0,
    borderRadius: 64
  }
})

export default List
