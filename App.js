import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true

const getFonts = () => Font.loadAsync({
  'bangers-regular': require('./assets/fonts/Bangers-Regular.ttf'),
  'indieFlower-regular': require('./assets/fonts/IndieFlower-Regular.ttf')
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
