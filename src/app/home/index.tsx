import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Alert
} from 'react-native'
import { router } from 'expo-router'
import { COLOR } from '@/styles/colors'
import { Icon } from 'react-native-elements'
import Carousel from 'react-native-reanimated-carousel'
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context'
import { supabase } from '@/supabase'

const width = Dimensions.get('window').width

const handleOnPress = (): void => {
  supabase.auth
    .signOut()
    .then((): void => {
      router.replace('/log_in')
    })
    .catch((): void => {
      Alert.alert('ログアウトに失敗しました')
    })
}

const List = (): JSX.Element => {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <ScrollView style={[styles.container]}>
        <View style={[styles.topNavigation, { paddingTop: insets.top }]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8
            }}
          >
            <Text
              style={{ fontSize: 18, color: COLOR.white, fontWeight: 'bold' }}
            >
              2024年3月26日
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name='settings'
                color={COLOR.white}
                onPress={() => {
                  handleOnPress()
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 24,
              color: COLOR.white,
              fontWeight: 'bold',
              marginBottom: 8
            }}
          >
            峯岸佑乃介
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Icon name='star' color={COLOR.yellow40} />
            <Text
              style={{ fontSize: 18, color: COLOR.white, fontWeight: 'bold' }}
            >
              有料プラン
            </Text>
          </View>
        </View>
        <View style={styles.InformationContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 18
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: COLOR.brown80,
                fontWeight: 'bold',
                marginTop: 8,
                marginBottom: 8
              }}
            >
              サマリー
            </Text>
            <Icon name='settings' color={COLOR.gray30} />
          </View>
          <View style={{ flex: 1 }}>
            <Carousel
              loop={false}
              width={width / 2.4}
              style={{ width }}
              height={width / 2}
              autoPlay={false}
              data={[...new Array(4).keys()]}
              scrollAnimationDuration={1000}
              onSnapToItem={(index) => {
                console.log('current index:', index)
                console.log('width', width)
              }}
              renderItem={({ index }) => {
                switch (index) {
                  case 0:
                    return (
                      <View
                        style={[
                          styles.summaryCard,
                          { backgroundColor: COLOR.green40 }
                        ]}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center'
                          }}
                        >
                          <Text
                            style={{ color: COLOR.white, fontWeight: 'bold' }}
                          >
                            塗りスコア
                          </Text>
                        </View>
                      </View>
                    )
                  case 1:
                    return (
                      <View
                        style={[
                          styles.summaryCard,
                          { backgroundColor: COLOR.orange40 }
                        ]}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center'
                          }}
                        >
                          <Text
                            style={{ color: COLOR.white, fontWeight: 'bold' }}
                          >
                            肌の状態
                          </Text>
                        </View>
                      </View>
                    )
                  case 2:
                    return (
                      <View
                        style={[
                          styles.summaryCard,
                          { backgroundColor: COLOR.purple40 }
                        ]}
                      >
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center'
                          }}
                        >
                          <Text
                            style={{ color: COLOR.white, fontWeight: 'bold' }}
                          >
                            連続記録
                          </Text>
                        </View>
                      </View>
                    )
                }
                return (
                  <View
                    style={[
                      styles.summaryCard,
                      { backgroundColor: COLOR.brown40 }
                    ]}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center'
                      }}
                    >
                      <Text style={{ color: COLOR.white, fontWeight: 'bold' }}>
                        その他
                      </Text>
                    </View>
                  </View>
                )
              }}
            />
          </View>
        </View>
        <View style={styles.InformationContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 18
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: COLOR.brown80,
                fontWeight: 'bold',
                marginTop: 8,
                marginBottom: 8
              }}
            >
              塗り薬の情報
            </Text>
            <Icon name='settings' color={COLOR.gray30} />
          </View>
          <View style={styles.InformationCard}></View>
          <View style={styles.InformationCard}></View>
          <View style={styles.InformationCard}></View>
        </View>
        <View style={styles.InformationContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 18
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: COLOR.brown80,
                fontWeight: 'bold',
                marginTop: 8,
                marginBottom: 8
              }}
            >
              塗り薬の情報
            </Text>
            <Icon name='settings' color={COLOR.gray30} />
          </View>
          <View style={styles.InformationCard}></View>
          <View style={styles.InformationCard}></View>
          <View style={styles.InformationCard}></View>
        </View>
      </ScrollView>
      <View style={styles.bottomNaviagation}></View>
    </SafeAreaProvider>
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
    borderRadius: 40,
    paddingLeft: 18,
    paddingRight: 18
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
  },
  InformationContainer: {
    marginRight: 18,
    marginLeft: 18
  },
  InformationCard: {
    backgroundColor: COLOR.white,
    height: 96,
    borderRadius: 40,
    marginTop: 8,
    marginBottom: 8
  },
  sliderContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  summaryCard: {
    backgroundColor: COLOR.white,
    height: 196,
    width: 163,
    borderRadius: 40,
    margin: 8,
    padding: 16
  }
})

export default List
