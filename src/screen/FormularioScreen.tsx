import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { InputComponent } from '../components/InputComponent'
import { styleGlobal } from '../theme/appTheme'
import { ButtonComponent } from '../components/ButtonComponent';

interface FormNumber {
  number1: number;
  number2: number;
  result: string;
}


export const FormularioScreen = () => {
  const [formNumber, setFormNumber] = useState<FormNumber>({
    number1: 0,
    number2: 0,
    result: ''
  });

  //funcion que captura los datso del formulario
    const handleChangeValue = (name: string, value: number): void => {
        //llamas funcion para actualizar el estado del formulario
        setFormNumber({...formNumber, [name]: value});
    }

    const setResult = (value: string) =>{
      setFormNumber({...formNumber, result: value})
    }

    const handleResult = (): void => {
        //console.log(formNumber);
        const {number1, number2} =formNumber
        if(number1 === 0 && number2 ===0){
          setResult('INDETERMINACIÓN')
          return
        }else if(
          number2 === 0
        ){
          setResult('NO EXISTE LA DIVISIÓN PARA CERO')
        }else{
          const result = formNumber.number1 / formNumber.number2
          setResult(`EL RESULTADO DE LA DIVISIÓN ES: ${result}`)
        }
        
        
    }

  return (
    <View style={styleGlobal.container}>
        <Text style={styleGlobal.title}>Formulario: </Text>
        <InputComponent placeholder='numero 1' keyboardType='number-pad' name='number1' handleChangeValue={handleChangeValue}/>
        <InputComponent placeholder='numero 2' keyboardType='number-pad' name='number2' handleChangeValue={handleChangeValue}/>
        <ButtonComponent buttonText='Dividir' onPress={handleResult}>
        </ButtonComponent>
        <Text>{formNumber.result}</Text>
    </View>
  )
}
