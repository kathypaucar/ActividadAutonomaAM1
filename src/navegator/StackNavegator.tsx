import { createStackNavigator } from '@react-navigation/stack';
import { InicioScreen } from '../screen/InicioScreen';
import { FormularioScreen } from '../screen/FormularioScreen';
import { BARRA_COLOR, PRIMARY_COLOR } from '../commons/constants';

export type RootStackParams = {
  Bienvenido: undefined,
  Formulario: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: BARRA_COLOR
        }
    }}>
      <Stack.Screen name="Bienvenido" component={InicioScreen} />
      <Stack.Screen name="Formulario" component={FormularioScreen} />
    </Stack.Navigator>
  );
}