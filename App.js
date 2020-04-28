import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'bangers-regular': require('./assets/fonts/Bangers-Regular.ttf'),
  'indieFlower-regular': require('./assets/fonts/IndieFlower-Regular.ttf')
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Home />
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
