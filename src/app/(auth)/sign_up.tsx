import Button from '@/components/auth/Button'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { supabase } from '@/supabase'
import { COLOR } from '@/styles/colors'

const handleOnPress = (email: string, password: string): void => {
  supabase.auth
    .signUp({ email, password })
    .then((response): void => {
      if (response.data.user !== null) {
        router.replace('/home')
      } else {
        Alert.alert('新規登録に失敗しました')
      }
    })
    .catch((error): void => {
      console.log('error', error)
    })
}

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isMailFocusInput, setIsMailFocusInput] = useState(false)
  const [isPasswordFocusInput, setIsPasswordFocusInput] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.titlContainer}>
          <Text style={styles.title}>新規登録</Text>
        </View>
        <TextInput
          style={[
            styles.input,
            isMailFocusInput && { borderColor: COLOR.green30, borderWidth: 3 }
          ]}
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='メールアドレス'
          textContentType='emailAddress'
          onFocus={() => {
            setIsMailFocusInput(true)
          }}
          onBlur={() => {
            setIsMailFocusInput(false)
          }}
        />
        <TextInput
          style={[
            styles.input,
            isPasswordFocusInput && {
              borderColor: COLOR.green30,
              borderWidth: 3
            }
          ]}
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
          autoCapitalize='none'
          secureTextEntry
          placeholder='パスワード'
          textContentType='password'
          onFocus={() => {
            setIsPasswordFocusInput(true)
          }}
          onBlur={() => {
            setIsPasswordFocusInput(false)
          }}
        />
        <Button
          label='作成する'
          onPress={() => {
            handleOnPress(email, password)
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>既にアカウントをお持ちの場合は</Text>
          <Link href='/log_in' asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerTextLink}>こちら</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.brown10
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  titlContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    fontSize: 16,
    height: 56,
    // borderColor: COLOR.green30,
    // borderWidth: 3,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
    elevation: 2
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24
  },
  footerText: {
    color: COLOR.gray60,
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold'
  },
  footerTextLink: {
    fontSize: 14,
    lineHeight: 24,
    color: COLOR.orange40
  }
})

export default SignIn
