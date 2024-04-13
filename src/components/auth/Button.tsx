import { COLOR } from '@/styles/colors'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'

interface Props {
  label: string
  onPress?: () => void
}

const Button = ({ label, onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonTitle}>{label}</Text>
      <Icon name='arrow-right' size={24} color='#fff' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.brown80,
    height: 56,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8
  }
})

export default Button
