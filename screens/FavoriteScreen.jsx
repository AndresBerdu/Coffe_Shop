import React from 'react'
import { SafeAreaView, View } from 'react-native';
import { CardComponent } from '../components/CardComponent';

const FavoriteScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <CardComponent/>
      </View>
    </SafeAreaView>
  )
}

export { FavoriteScreen };

const style = StyleSheet.create({
    
})
