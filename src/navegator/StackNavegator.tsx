import { createStackNavigator } from '@react-navigation/stack';
import { InicioScreen } from '../screen/InicioScreen';
import { FormularioScreen } from '../screen/FormularioScreen';

export type RootStackParams = {
  Inicio: undefined,
  Formulario: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Formulario" component={FormularioScreen} />
    </Stack.Navigator>
  );
}