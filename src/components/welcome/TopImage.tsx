import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

interface Props {
  pageNumber: number
}
export const TopImage = ({ pageNumber }: Props): JSX.Element => {
  if (pageNumber === 1) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-1.png')}
        contentFit='contain'
      />
    )
  }

  if (pageNumber === 2) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-2.png')}
        contentFit='contain'
      />
    )
  }
  if (pageNumber === 3) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-2.png')}
        contentFit='contain'
      />
    )
  }
  if (pageNumber === 4) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-2.png')}
        contentFit='contain'
      />
    )
  }
  if (pageNumber === 5) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-2.png')}
        contentFit='contain'
      />
    )
  }

  return <></>
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: -160,
    flex: 1,
    width: '100%',
    height: '100%'
  }
})

export default TopImage
