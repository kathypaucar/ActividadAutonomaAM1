import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { styleGlobal } from '../theme/appTheme';

interface Props{
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue: (name: string, value: number) => void;
    name: string;
    isPassword?: boolean;
}

export const InputComponent = ({placeholder, keyboardType, handleChangeValue, name, isPassword=false}: Props) => {
  return (
    <TextInput
    placeholder= {placeholder}
    keyboardType={keyboardType}
    onChangeText={(value)=>handleChangeValue(name, Number(value))}
    secureTextEntry={isPassword}
    style={styleGlobal.input}/>
  )
}
