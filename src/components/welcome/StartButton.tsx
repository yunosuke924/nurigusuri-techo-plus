import {
  Text,
  StyleSheet,
  TouchableOpacity,
  type ViewStyle
} from 'react-native'
import { COLOR } from '@/styles/colors'
interface Props {
  children: JSX.Element
  style?: ViewStyle
  onPress?: () => void
}
const StartButton = ({ children, style, onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={[Styles.circleButton, style]} onPress={onPress}>
      <Text style={Styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  circleButton: {
    width: 138,
    height: 56,
    backgroundColor: COLOR.brown80,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // right: 40,
    bottom: 40,
    // 以下は影の設定だけどiOSのみ
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    // 以下はAndroidのみ
    elevation: 8 // elevationはGoogle Material Designの層の高さの設定
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 40
  }
})

export default StartButton
