import Button from '@/components/Button'
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

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>新規登録</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='メールアドレス'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
          autoCapitalize='none'
          secureTextEntry
          placeholder='パスワード'
          textContentType='password'
        />
        <Button
          label='新規登録'
          onPress={() => {
            handleOnPress(email, password)
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>アカウントをお持ちの方は</Text>
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
    backgroundColor: '#fff'
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24
  },
  footerTextLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3'
  }
})

export default Login
