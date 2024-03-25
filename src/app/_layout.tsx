import { Stack } from 'expo-router'

const Layout = (): JSX.Element => (
  <Stack
    screenOptions={{
      headerShown: false,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent'
      },
      animation: 'slide_from_right'
    }}
  />
)

export default Layout
