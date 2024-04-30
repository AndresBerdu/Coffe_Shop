import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Modal } from 'react-native';

const PhotoPerfilComponent = () => {

    const [visible, setVisible] = useState(false);

    const handleVisible = (bolean) => {
        setVisible(bolean);
    }

  return (
   <SafeAreaView>
    <View>
        <Modal
            transparent={true}
            animationType='fade'
            visible={visible}
            nRequestClose={() => handleVisible(false)}
        >

        </Modal>
    </View>
   </SafeAreaView> 
  )
}

const style = StyleSheet.create({
    containerPhoto: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    TouchableOpacity: {
        paddingHorizontal: 50
    }

})

export { PhotoPerfilComponent };
