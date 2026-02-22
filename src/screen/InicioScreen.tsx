import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styleGlobal } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navegator/StackNavegator'

type Props = StackScreenProps<RootStackParams, 'Inicio'>

export const InicioScreen =  ({navigation}: Props)  => {
  return (
    <View style={styleGlobal.container}>
        <Text style={styleGlobal.title}>Bienvenido</Text>
        <Image style={styleGlobal.image}
        source={{
          uri: 'https://www.innovaweb.cl/wp-content/uploads/2019/07/confeccionar-apps.jpg',
        }}
      />
        <TouchableOpacity style={styleGlobal.button}
        onPress={()=> navigation.navigate('Formulario')}>
            <Text style={styleGlobal.buttonText}>Acceder</Text>
        </TouchableOpacity>
    </View>
  )
}

