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
        contentPosition={'top'}
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
        source={require('assets/welcome-3.png')}
        contentFit='contain'
      />
    )
  }
  if (pageNumber === 4) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-4.png')}
        contentFit='contain'
      />
    )
  }
  if (pageNumber === 5) {
    return (
      <Image
        style={styles.image}
        source={require('assets/welcome-5.png')}
        contentFit='contain'
      />
    )
  }

  return <></>
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    maxHeight: 400
  }
})

export default TopImage
