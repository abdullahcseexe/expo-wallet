import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {COLORS} from "../constants/color.js"
const SafeScreen = ({children}) => {
    const insets = useSafeAreaInsets();
    /**
    This comes from react-native-safe-area-context.
    It tells you how much space is “unsafe” on the screen — like:
    -> the notch on iPhones,
    -> the status bar at the top,
    -> the home indicator area at the bottom,
    or, any curved screen edges.
    So it gives you the padding values you need to keep your UI away from those areas. 
     **/ 


  return (
    <View style={{paddingTop:insets.top, paddingBottom:insets.bottom, flex:1, backgroundColor: COLORS.background}}>
      {children}
    </View>
  )
}

export default SafeScreen